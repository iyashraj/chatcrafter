import Logo from "../assets/Group 8.png";

const Navbar = () => {
  return (
    <div className="nav-container w-full h-20vh flex justify-between pt-4 pb-4 pr-10 pl-10 border-gray-950 items-center">
        <img className="w-[30%] min-w-40 cursor-pointer" src={Logo} alt="chatcrafter-logo" />
      <div className="flex gap-3">
        <button className="button-54 " role="button">
          Login
        </button>
        <button className="button-54" role="button">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
