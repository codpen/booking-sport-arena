import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";
import AccordionUserList from "../../components/AccordionUserList";
import Sidebar from "../../components/sidebar/Sidebar";
import { getUserList } from "../../services/Admin";

export default function AdminUserList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      const json = JSON.parse(localStorage.getItem("user-info"));
      fetchDataUserList(json.token);
    } else {
      Navigate("/login");
    }
  }, []);

  const fetchDataUserList = async (token) => {
    const response = await getUserList(token);
    if (response.code === 200) {
      setUserList(response.data);
      // swal("Success", "Data has been fetched", "success");
    } else {
      if (response.message === "missing or malformed jwtt") {
        Navigate("/login");
      } else {
        swal("Error", response.message, "error");
      }
    }
  };

  const populatingUserList = () => {
    if (userList.length > 0) {
      return userList.map((data, index) => {
        return (
          <AccordionUserList
            id={index}
            fullname={data.fullname}
            username={data.username}
            email={data.email}
            phone={data.phone_number}
            image={data.image}
          />
        );
      });
    }
  };

  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      {/* <Accordion /> */}
      <div className="w-full border-2 rounded-lg mb-10 mx-8 mt-10 py-3 overflow-y-scroll overflow-x-hidden">
        <p className="text-lg font-semibold pt-2 pb-6 ml-7"> User List</p>
        <div className="flex text-slate-500 mb-3 ">
          <p className="pl-10 basis-6/12">User</p>
          <p className="basis-3/12">Contact</p>
          <p className="basis-3/12"></p>
        </div>
        <div className="w-full bg-slate-100 h-0.5 mx-4 mb-3" />
        {/* <TableDropdown /> */}
        <div>{populatingUserList()}</div>
      </div>
    </div>
  );
}
