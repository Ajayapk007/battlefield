// import SideBar from "./SideBar";
import logo from "../utils/imgs/logo.png";
const Header = () => {

  return (
    <div className=" bg-black text-white h-28 font-medium text-xl ">
      <div className=" flex justify-between items-center h-full">
        <div>Learn more</div>
        
        <div>
        <img 
        className=" h-20"
        src={logo}
        alt="logo" />
        </div>

        <div className="flex h-full gap-4">
          <button>Login</button>
          <div className=" h-full flex text-3xl font-semibold px-4 items-center bg-[#f6bf00] hover:bg-[#e0953a]">
            Battle Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
