import React, { useState } from "react";
import { InputText } from "../../components/InputText";

import Sidebar from "../../components/sidebar/Sidebar";

export default function AdminSetting() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const checkConfirmPassword = () => {
    if (
      password !== "" &&
      confirmPassword !== "" &&
      confirmPassword !== password
    ) {
      return <span>Password Not Match</span>;
    }
  };
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      {/* <Accordion /> */}
      <div className="w-full border-2 rounded-lg mb-10 mx-8 mt-20 py-3">
        <p className="text-lg font-semibold pt-2 pb-6 ml-7"> owner Setting</p>
        <div className="flex text-slate-500 mb-3 "></div>
        <div className="w-full bg-slate-100 h-0.5 mx-4 mb-3" />
        <div className="md:flex w-full gap-3">
          <div>
            <p className=" mb-2">old password</p>
            <InputText
              id="input-password"
              placeholder="input old password"
              // onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div>
            <p className=" mb-2">new password</p>
            <InputText
              id="input-password"
              placeholder="input new password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div>
            <p className=" mb-2">confirm password</p>
            <InputText
              id="input-confirm-password"
              placeholder="confirm your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
            />
          </div>
        </div>
        {checkConfirmPassword()}
        {/* <TableDropdown /> */}
      </div>
    </div>
  );
}
