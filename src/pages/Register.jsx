import React, { useState, useCallback } from "react";
// import { SolidButton } from "../components/Buttons";
import { InputText } from "../components/InputText";
import Navbar from "../components/Navbar";
import illustration from "../assets/goal.png";
import { useNavigate } from "react-router-dom";
import { registerService } from "../services/Auth";
import { Button } from "../components/Buttons";
import swal from "sweetalert";

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone_number, setPhone] = useState("");
  const [statusValidate, setStatusValidate] = useState(false);
  const navigate = useNavigate();
  document.title = "Register";

  async function signUp() {
    if (confirmPassword !== password) {
      return;
    }
    if (statusValidate) {
      let item = { fullname, username, email, phone_number, password };
      const result = await registerService(item);
      if (result.code === 200) {
        swal(result.message, "", "success");
        navigate("/login");
      } else {
        swal(result.message, "email aready used / check all form", "error");
      }
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

  const emailValidation = () => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email || regex.test(email) === false) {
      return <span>Email Not Match</span>;
    }
    setStatusValidate(true);
    setEmail(email);
  };
  console.log(fullname);
  console.log(email);

  // function validateEmail (email) {
  //   const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return regexp.test(email);
  // }

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
                Create an Account
              </h1>
              <form className="capitalize">
                <div className="md:flex w-full gap-3">
                  <div>
                    <p className=" mb-2 w-full">fullname</p>
                    <InputText
                      id="input-fullname"
                      type="text"
                      placeholder="john doe"
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className=" mb-2">username</p>
                    <InputText
                      id="input-username"
                      type="text"
                      placeholder="john123"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="md:flex w-full gap-3">
                  <div>
                    <p className=" mb-2">email</p>
                    <InputText
                      id="input-email"
                      type="email"
                      placeholder="mail@mail.com"
                      className="invalid:text-red-500"
                      onChange={(e) => emailValidation(e.target.value)}
                    />

                    {/* {emailValidation()} */}
                  </div>
                  <div>
                    <p className=" mb-2">phone number</p>
                    <InputText
                      id="input-phone"
                      type="text"
                      pattern="[0-9]*"
                      className="invalid:text-red-500 invalid:ring-red-500"
                      placeholder="+628123456789"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="md:flex w-full gap-3">
                  <div>
                    <p className=" mb-2">password</p>
                    <InputText
                      id="input-password"
                      placeholder="your password"
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
              </form>

              <Button
                id="register-button"
                type="submit"
                variant="solid"
                className="mt-10 w-full uppercase"
                onClick={() => {
                  signUp();
                }}
              >
                register
              </Button>
              <p className="text-center">
                Already have an account?{" "}
                <a id="navigate-login" className="text-cyan-600" href="login">
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
