import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { SolidButton } from "../components/Buttons";
import { InputText } from "../components/InputText";
import Button from "../components/Buttons";
import Navbar from "../components/Navbar";
import { loginService } from "../services/Auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signIn() {
    let Auth = await loginService({
      email: email,
      password: password,
    });
    if (Auth.status === "success") {
      localStorage.setItem("user-info", JSON.stringify(Auth.data));
      alert("login sukses");
      navigate("/");
    } else if (Auth.status === "failed") {
      alert(Auth.message);
    }
  }
  return (
    <div>
      <Navbar />
      <div
        className="flex justify-center pt-28 md:pt-24 lg:pt-32 h-screen bg-no-repeat bg-cover px-10 md:px-40 lg:px-64"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1293&q=80")`,
        }}
      >
        <div className="h-fit w-auto bg-white rounded-md py-10 px-4 md:px-24 lg:px-40 ">
          <h1 className="text-3xl font-bold text-center text-teal-500 mb-7">
            Login
          </h1>
          <p className=" mb-2">email</p>
          <InputText
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
          />
          <p className=" mb-2 mt-6">password</p>
          <InputText
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
            className="mb-4"
          />
          <Button
            type="submit"
            variant="solid"
            className="mt-10 w-full"
            onClick={() => {
              signIn();
            }}
          >
            login
          </Button>
          <p className="text-center">
            don't have an account?
            <a className="text-cyan-400" href="Register">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
