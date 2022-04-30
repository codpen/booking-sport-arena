import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";
import AccordionRequestOwner from "../../components/AccordionRequestOwner";
import Sidebar from "../../components/sidebar/Sidebar";
import { getRequestOwner } from "../../services/AdminOwnerRequest";

export default function AdminOwnerRequest() {
  const [requestOwner, setRequestOwner] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      const json = JSON.parse(localStorage.getItem("user-info"));
      fetchDataRequestOwner(json.token);
    } else {
      Navigate("/login");
    }
  }, []);

  const fetchDataRequestOwner = async (token) => {
    const response = await getRequestOwner(token);
    if (response.code === 200) {
      setRequestOwner(response.data);
      swal("Success", "Data has been fetched", "success");
    } else {
      if (response.message === "invalid or expired jwt") {
        Navigate("/login");
      } else {
        swal("Error", response.message, "error");
      }
    }
  };

  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      {/* <Accordion /> */}
      <div className="w-full border-2 rounded-lg mb-10 mx-8 mt-20 py-3">
        <p className="text-lg font-semibold pt-2 pb-6 ml-7"> owner Request</p>
        <div className="flex text-slate-500 mb-3 ">
          <p className="pl-10 basis-2/5">User</p>
          <p className="basis-1/5">Contact</p>
          <p className="basis-1/5">Date</p>
          <p className="basis-1/5">Status</p>
        </div>
        <div className="w-full bg-slate-100 h-0.5 mx-4 mb-3" />
        {/* <TableDropdown /> */}
        <AccordionRequestOwner />
      </div>
    </div>
  );
}
