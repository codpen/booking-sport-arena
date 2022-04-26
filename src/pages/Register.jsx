import React, { useState } from "react";
// import { SolidButton } from "../components/Buttons";
import { InputText } from "../components/InputText";
import Navbar from "../components/Navbar";
import illustration from "../assets/goal.png";
import { useNavigate } from "react-router-dom";
import { registerService } from "../services/Auth";
import Button from "../components/Buttons";

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone_number, setPhone] = useState("");
  const navigate = useNavigate();

  async function signUp() {
    if (confirmPassword !== password) {
      return;
    }
    let item = { fullname, username, email, phone_number, password };
    const result = await registerService(item);
    console.log(item);
    if (result.status === "success") {
      alert("register sukses");
      navigate("/login");
    } else {
      alert("register gagal");
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
    <div>
      <Navbar />

      <div
        className="flex justify-center pt-28 h-screen bg-no-repeat bg-cover py-3 px-8 md:px-10 lg:py-28 lg:px-24"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1293&q=80")`,
        }}
      >
        <div className="h-fit w-full bg-white rounded-md py-10 px-10">
          <div className="md:flex">
            <div className="md:w-6/12 lg:w-7/12 my-auto invisible md:visible">
              <img className="w-0 md:w-auto " src={illustration} alt="" />
            </div>
            <div className="md:w-6/12 lg:w-5/12">
              <h1 className="text-3xl font-bold text-teal-500 mb-7">
                Crete an account
              </h1>
              <form className="">
                <div className="md:flex w-full gap-3">
                  <div>
                    <p className=" mb-2 w-full">fullname</p>
                    <InputText onChange={(e) => setFullname(e.target.value)} />
                  </div>
                  <div>
                    <p className=" mb-2">username</p>
                    <InputText onChange={(e) => setUsername(e.target.value)} />
                  </div>
                </div>
                <div className="md:flex w-full gap-3">
                  <div>
                    <p className=" mb-2">email</p>
                    <InputText onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <p className=" mb-2">phone number</p>
                    <InputText onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </div>
                <div className="md:flex w-full gap-3">
                  <div>
                    <p className=" mb-2">password</p>
                    <InputText
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                    />
                  </div>
                  <div>
                    <p className=" mb-2">confirm password</p>
                    <InputText
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                    />
                    {checkConfirmPassword()}
                  </div>
                </div>
              </form>

              <Button
                type="submit"
                variant="solid"
                className="mt-10 w-full"
                onClick={() => {
                  signUp();
                }}
              >
                register
              </Button>
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
