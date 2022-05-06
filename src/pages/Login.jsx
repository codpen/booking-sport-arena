import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { SolidButton } from "../components/Buttons";
import { InputText } from "../components/InputText";
import Button from "../components/Buttons";
import Navbar from "../components/Navbar";
import { loginService } from "../services/Auth";
import swal from "sweetalert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  document.title = "Login";

  async function signIn() {
    let Auth = await loginService({
      email: email,
      password: password,
    });
    if (Auth.code === 200 && Auth.data.role === "user") {
      localStorage.setItem("user-info", JSON.stringify(Auth.data));
      swal(Auth.message, "", "success");
      navigate("/");
    } else if (Auth.code === 200 && Auth.data.role === "admin") {
      localStorage.setItem("user-info", JSON.stringify(Auth.data));
      swal(Auth.message, "", "success");
      navigate("/admin");
    } else if (Auth.code === 400) {
      swal("Login failed", Auth.message, "error");
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
        <div className="h-fit w-auto bg-white rounded-md py-10 px-4 md:px-24 lg:px-40 uppercase">
          <h1 className="text-3xl font-bold text-center text-teal-500 mb-7">
            Login
          </h1>
          <p className=" mb-2 font-semibold text-center">Email</p>
          <InputText
            onChange={(e) => setEmail(e.target.value)}
            id="input-email"
            type="email"
            placeholder="mail@mail.com"
            className="invalid:text-red-500"
          />
          <p className=" mb-2 mt-6 font-semibold text-center">Password</p>
          <InputText
            onChange={(e) => setPassword(e.target.value)}
            id="input-password"
            placeholder="Password"
            type="password"
            className="mb-4"
          />
          <Button
            id="login-button"
            type="submit"
            variant="solid"
            className="mt-10 w-full uppercase"
            onClick={() => {
              signIn();
            }}
          >
            login
          </Button>
          <p className="text-center mt-3 capitalize">
            doesn't have an account?
            <a id="navigate-register" className="text-cyan-600" href="Register">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
