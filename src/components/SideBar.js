import { CHALLENGEICON, HOMEICON, MESDALICON } from "../utils/icons";

const SideBar = () => {

    return (
      <div className=" sidebar bg-[#222] w-2/12 h-[100vh] text-white text-xl font-semibold pl-10 overflow-scroll">
    
    {/* {<div className="  hidden sm:hidden md:block md:left-0 md:top-[1.3rem] md:h-[calc(100%-1.3rem)] lg:top-0 lg:h-full lg:relative bg-zinc-900 text-white space-y-6 py-5 inset-y-0 left-0 transform md:translate-x-0 transition-all duration-200 ease-in-out px-4 before:z-minus1 z-[50] relative w-64 sidebar overflow-scroll">
    } */}
        <ul className=" flex flex-col gap-10 mt-10">
            <li className="flex items-center "><span className="">{HOMEICON}</span> Home</li>
            <li className="flex "><span>{MESDALICON}</span>Champions</li>
            <li className="flex"><span>{CHALLENGEICON}</span>Challenges</li>
            <li>EVENTS</li>
            <li>News</li>
            <li>Profile</li>
            <li>COMMUNITY</li>
            <li>SUPPORT</li>
            <li>UPCOMING </li>
            <li>Learn More</li>
            <li>Learn More</li>
            <li>Learn More</li>
            <li>Learn More</li>
        </ul>
          
      </div>
    );
  };
  
  export default SideBar;
  