import React from "react";
import AccordionMui from "../components/AccordionMui";
import Sidebar from "../components/sidebar/Sidebar";

export default function AdminDashboard() {
  return (
    <div>
      <Sidebar />
      {/* <Accordion /> */}
      <AccordionMui />
    </div>
  );
}
