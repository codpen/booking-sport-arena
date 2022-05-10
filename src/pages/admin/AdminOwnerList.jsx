import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";
import AccordionRequestOwner from "../../components/AccordionRequestOwner";
import Sidebar from "../../components/sidebar/Sidebar";
import { getOwnerList } from "../../services/AdminOwnerList";

export default function AdminOwnerList() {
  const [OwnerList, setOwnerList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      const json = JSON.parse(localStorage.getItem("user-info"));
      fetchDataOwnerList(json.token);
    } else {
      Navigate("/login");
    }
  }, []);

  const fetchDataOwnerList = async (token) => {
    const response = await getOwnerList(token);
    if (response.code === 200) {
      setOwnerList(response.data);
      swal("Success", "Data has been fetched", "success");
    } else {
      if (response.message === "missing or malformed jwt") {
        Navigate("/login");
      } else {
        swal("Error", response.message, "error");
      }
    }
  };

  const populatingOwnerList = () => {
    if (OwnerList.length > 0) {
      return OwnerList.map((data, index) => (
        <AccordionRequestOwner
          key={data.ID}
          id={index}
          fullname={data.fullname}
          username={data.username}
          email={data.email}
          phone={data.phone_number}
          status={data.status}
          certificate={data.business_certificate}
        />
      ));
    }
  };

  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      {/* <Accordion /> */}
      <div className="w-full border-2 rounded-lg mb-10 mx-8 mt-20 py-3">
        <p className="text-lg font-semibold pt-2 pb-6 ml-7"> Owner List</p>
        <div className="flex text-slate-500 mb-3 ">
          <p className="pl-10 basis-2/5">User</p>
          <p className="basis-1/5">Contact</p>
          <p className="basis-1/5">Date</p>
          <p className="basis-1/5">Status</p>
        </div>
        <div className="w-full bg-slate-100 h-0.5 mx-4 mb-3" />
        {/* <TableDropdown /> */}
        {populatingOwnerList()}
      </div>
    </div>
  );
}
