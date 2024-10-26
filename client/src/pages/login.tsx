import { useNavigate } from "react-router-dom";
import ChatCrafter from "../assets/Group 7.png";
import CCButton from "../components/ccButton";
import CCInput from "../components/ccInput";
import GoogleAuth from "../authhandlers/googleAuth";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between h-full items-center">
      <img
        className="object-contain w-auto h-[420px] select-none flex-1"
        src={ChatCrafter}
        alt="chat_login"
      />
      <div className="flex flex-1 flex-col gap-7 pt-5 items-center font-montserrat">
        <div className="flex items-center flex-col">
          {/* <img className="w-16" src={CCIcon} alt="CCIcon" /> */}
          <h1 className="text-3xl font-bold">Welcome Back</h1>
        </div>
        <form className="w-full flex flex-col gap-4 items-center">
          <CCInput
            className="w-[80%]"
            placeholder="enter your username or email"
            label="Username or Email"
            isRequired={true}
          />
          <CCInput
            className="w-[80%]"
            placeholder="enter your password"
            label="Password"
            isRequired={true}
          />
          <div className="flex w-[80%] items-center gap-2 font-semibold">
            or -{" "}
            <GoogleAuth
              handleSuccess={(e) => console.log(e, "success")}
              handleFailure={(e) => console.log(e, "failure")}
              action_type = "signin_with"
            />
          </div>
          <CCButton className="w-[80%] mt-3" text="Submit" />
          <div>
            Don't have an account?{" "}
            <span
              className="text-ccgreen font-bold cursor-pointer"
              onClick={(): void => navigate("/signup")}
            >
              Register
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
