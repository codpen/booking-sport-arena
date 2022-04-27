import React from "react";
import AccordionMui from "../components/AccordionMui";
import Sidebar from "../components/sidebar/Sidebar";

export default function AdminDashboard() {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      {/* <Accordion /> */}
      <div className="w-full border-2 rounded-lg mb-10 mx-8 mt-20 py-3">
        <p className="text-lg font-semibold pt-2 pb-6 ml-7"> owner Request</p>
        <div className="flex text-slate-500 mb-3 justify-around ">
          <p>User</p>
          <p>Contact</p>
          <p>Date</p>
          <p>Status</p>
        </div>
        <AccordionMui />
      </div>
    </div>
  );
}
