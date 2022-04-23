import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SolidButton } from "../components/Buttons";
import { InputText } from "../components/InputText";
import Navbar from "../components/Navbar";
import { loginService } from "../services/Auth";
import qs from "qs";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  async function signIn() {
    let Auth = await loginService(
      qs.stringify({
        username: email,
        password: password,
      })
    );
    if (Auth.code === 200) {
      localStorage.setItem("user-info", JSON.stringify(Auth.data));
      alert("login sukses");
      navigate("/");
    } else if (Auth.code === 401) {
      alert("Wrong email or password");
    }
  }

  return (
    <div>
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
          <InputText
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
          <p className="text-center mb-2 mt-6">password</p>
          <InputText
            nChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
            className="mb-4"
          />
          <button
            type="submit"
            onClick={() => {
              signIn();
            }}
            className="
            m-2 bg-teal-500 text-white px-5 py-2 rounded-md font-bold hover:bg-teal-600"
          >
            login
          </button>

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
