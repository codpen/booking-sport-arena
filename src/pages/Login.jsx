import React from "react";
import { SolidButton } from "../components/Buttons";
import { InputText } from "../components/InputText";
import Navbar from "../components/Navbar";
// import TextField from "@material-ui/core/TextField";

export default function Login() {
  return (
    <div>
      {/* <TextField
        helperText="Please enter your name"
        id="demo-helper-text-aligned"
        label="Name"
        variant="outlined"
        color={lightGreen[500]}
      />
      <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Name"
        variant="outlined"
        color={amber[500]}
      />
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        color="secondary"
      /> */}

      <Navbar />
      <div
        className="flex justify-center items-center h-screen bg-no-repeat bg-cover p-96"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1293&q=80")`,
        }}
      >
        <div className="h-96 w-full bg-white rounded-md py-10 px-52 ">
          <h1 className="text-3xl font-bold text-center text-teal-500 mb-7">
            Login
          </h1>
          <p className="text-center mb-2">email</p>
          <InputText />
          <p className="text-center mb-2 mt-6">password</p>
          <InputText type="password" className="mb-4" />
          <SolidButton className="w-screen" text="Login" link="/login" />
          <p className="text-center">
            don't have an account?{" "}
            <a className="text-cyan-400" href="Register">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
