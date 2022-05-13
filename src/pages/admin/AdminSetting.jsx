import React, { useState } from "react";
import swal from "sweetalert";
import { Button } from "../../components/Buttons";
import { InputText } from "../../components/InputText";

import Sidebar from "../../components/sidebar/Sidebar";
import { changePassword } from "../../services/Admin";

export default function AdminSetting() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const data = localStorage.getItem("user-info");
  const json = JSON.parse(data);
  const token = json.token;

  async function updatePassword() {
    const body = {
      password: password,
    };
    const response = await changePassword(token, body);
    if (confirmPassword !== password) {
      return;
    }
    if (response.code === 200) {
      swal("Success", "Password changed successfully", "success");
    } else {
      swal("Error", response.message, "error");
    }
  }

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
        <div className="md:flex w-full gap-3 ml-4">
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
        <Button
          id="register-button"
          type="submit"
          variant="solid"
          className="mt-10 ml-4"
          onClick={() => {
            updatePassword();
          }}
        >
          submit
        </Button>
      </div>
    </div>
  );
}
