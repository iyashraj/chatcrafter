import Logo from "../assets/Group 8.png";
import CCButton from "./ccButton";

const Navbar: React.FC = () => {
  return (
    <div className="nav-container w-full h-20vh flex justify-between pt-2 pb-2 pr-10 pl-10 border-gray-950 items-center">
      <img
        className="w-[30%] min-w-40 cursor-pointer select-none"
        src={Logo}
        alt="chatcrafter-logo"
      />
      <div className="flex gap-3">
        <CCButton text={"Login"} />
        <CCButton text={"Get Started"} />
      </div>
    </div>
  );
};

export default Navbar;
