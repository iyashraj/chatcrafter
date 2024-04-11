import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import ChatCrafter from "../assets/Group 7.png";
import CCButton from "../components/ccButton";
import CCInput from "../components/ccInput";
import { registerDataError, validRegisterData } from "../utils/validate";
import { registerUser } from "../webservices/user.erbservices";
import toast, { Toaster } from "react-hot-toast";

interface SignupData {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface SignupError {
  username?: string;
  password?: string;
  confirmPassword?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState<SignupData>({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const [signupError, setSignupError] = useState<SignupError>({});

  const signUpFormHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const signupHandler = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const res = validRegisterData(signupData);
    setSignupError(res);

    if (res && res.submitForm) {
      try {
        await registerUser(signupData);
        toast.success("User registered successfully!");
        navigate("/login");
      } catch (err:any) {
        toast.error(err.message || "Something went wrong!");
      }
    }
  };

  return (
    <div className="w-full flex justify-between h-full items-center">
      <Toaster />
      <img
        className="object-contain w-auto h-[420px] select-none flex-1"
        src={ChatCrafter}
        alt="chat_login"
      />
      <div className="flex flex-1 flex-col gap-7 pt-5 items-center font-montserrat">
        <div className="flex items-center flex-col">
          <h1 className="text-3xl font-bold">Create an account</h1>
        </div>
        <form className="w-full flex flex-col gap-5 items-center px-10" onSubmit={signupHandler}>
          <div className="flex justify-between w-full gap-3">
            <CCInput
              id="username"
              className="w-full"
              placeholder="Enter username"
              label="Username"
              isRequired={true}
              onChange={signUpFormHandler}
              isError={!!signupError.username}
              errorMessage={signupError.username}
            />
            <CCInput
              id="email"
              className="w-full"
              placeholder="Enter your email"
              label="Email"
              isRequired={true}
              onChange={signUpFormHandler}
              isError={!!signupError.email}
              errorMessage={signupError.email}
            />
          </div>
          <div className="flex justify-between w-full gap-3">
            <CCInput
              id="firstName"
              className="w-full"
              placeholder="Enter your firstname"
              label="First Name"
              onChange={signUpFormHandler}
            />
            <CCInput
              id="lastName"
              className="w-full"
              placeholder="Enter your lastname"
              label="Last Name"
              onChange={signUpFormHandler}
            />
          </div>
          <div className="flex justify-between w-full gap-3">
            <CCInput
              className="w-full"
              placeholder="Enter your password"
              label="Password"
              isRequired={true}
              onChange={signUpFormHandler}
              type="password"
              id="password"
              isError={!!signupError.password}
              errorMessage={signupError.password}
            />
            <CCInput
              className="w-full"
              placeholder="Confirm your password"
              label="Confirm Password"
              isRequired={true}
              onChange={signUpFormHandler}
              type="password"
              id="confirmPassword"
              isError={!!signupError.confirmPassword}
              errorMessage={signupError.confirmPassword}
            />
          </div>
          <CCButton className="w-full mt-5 px-5" text="Submit" onClick={signupHandler} />
          <div>
            Don't have an account?{" "}
            <span className="text-ccgreen font-bold cursor-pointer" onClick={() => navigate("/login")}>
              Login
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
