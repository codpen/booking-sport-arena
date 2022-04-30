import React from "react";
import AccordionMui from "../../components/AccordionMui";
import Sidebar from "../../components/sidebar/Sidebar";

export default function AdminListUser() {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      {/* <Accordion /> */}
      <div className="w-full border-2 rounded-lg mb-10 mx-8 mt-20 py-3">
        <p className="text-lg font-semibold pt-2 pb-6 ml-7"> User List</p>
        <div className="flex text-slate-500 mb-3 ">
          <p className="pl-10 basis-2/5">User</p>
          <p className="basis-1/5">Contact</p>
          <p className="basis-1/5">Date</p>
          <p className="basis-1/5">Status</p>
        </div>
        <div className="w-full bg-slate-100 h-0.5 mx-4 mb-3" />
        {/* <TableDropdown /> */}
        <AccordionMui />
      </div>
    </div>
  );
}
