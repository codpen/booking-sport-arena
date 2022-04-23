import React, { useState } from "react";
import { SolidButton } from "../components/Buttons";
import { InputText } from "../components/InputText";
import Navbar from "../components/Navbar";
import illustration from "../assets/goal.png";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [fullname, setFullname] = useState({});
  const [username, setUsername] = useState({});
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [confirmPassword, setConfirmPassword] = useState({});
  const [phone, setPhone] = useState({});
  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <Navbar />
      <div
        className="flex justify-center items-center h-screen bg-no-repeat bg-cover py-28 px-52"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1293&q=80")`,
        }}
      >
        <div className="h-auto w-full bg-white rounded-md py-10 px-10">
          <div className="flex">
            <div className="w-6/12">
              <img src={illustration} alt="" />
            </div>
            <div className="w-6/12">
              <h1 className="text-3xl font-bold text-teal-500 mb-7">
                Crete an account
              </h1>
              <div className="flex space-x-4">
                <div className="w-6/12">
                  <p className=" mb-2">fullname</p>
                  <InputText />
                  <p className=" mb-2">email</p>
                  <InputText />
                  <p className=" mb-2">password</p>
                  <InputText type="password" />
                </div>
                <div className="w-6/12">
                  <p className=" mb-2">username</p>
                  <InputText />
                  <p className=" mb-2">phone number</p>
                  <InputText />
                  <p className=" mb-2">confirm password</p>
                  <InputText type="password" />
                </div>
              </div>

              <SolidButton className="w-screen" text="Register" link="/login" />
              <p className="text-center">
                Already have an account?{" "}
                <a className="text-cyan-400" href="login">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
