import { useNavigate } from "react-router-dom";
import ChatCrafter from "../assets/Group 7.png";
import CCButton from "../components/ccButton";
import CCInput from "../components/ccInput";
import CCIcon from "../assets/Group 9.png";

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
        <form className="w-full flex flex-col gap-5 items-center">
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
          <CCButton className="w-[80%] mt-5" text="Submit" />
          <div>
            Don't have an account?{" "}
            <span
              className="text-ccgreen font-bold cursor-pointer"
              onClick={(): void => navigate("/signup")}>
              Register
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
