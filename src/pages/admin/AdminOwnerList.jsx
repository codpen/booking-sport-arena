import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";
import AccordionOwnerList from "../../components/AccordionOwnerList";
import Sidebar from "../../components/sidebar/Sidebar";
import { getOwnerList } from "../../services/Admin";

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
        <AccordionOwnerList
          key={data.ID}
          id={index}
          fullname={data.fullname}
          username={data.username}
          image={data.image}
          totalVenue={data.venue.length ?? 0}
          businessName={data.business_name}
          venueImage={data.venue.image}
          venueName={data.venue.name}
          venueCity={data.venue.city}
          venueAddress={data.venue.address}
        />
      ));
    }
  };

  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      {/* <Accordion /> */}
      <div className="w-full border-2 rounded-lg mb-10 mx-8 mt-10 py-3 overflow-y-scroll overflow-x-hidden">
        <p className="text-lg font-semibold pt-2 pb-6 ml-7"> Owner List</p>
        <div className="flex text-slate-500 mb-3 ">
          <p className="pl-10 basis-6/12">owner</p>
          <p className="basis-6/12">Business</p>
        </div>
        <div className="w-full bg-slate-100 h-0.5 mx-4 mb-3 " />
        {/* <TableDropdown /> */}
        {populatingOwnerList()}
      </div>
    </div>
  );
}
