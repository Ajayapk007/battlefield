import { CHALLENGEICON, HOMEICON, MESDALICON } from "../utils/icons";

const SideBar = () => {

    return (
      <div className=" sidebar bg-[#222] w-2/12 h-[100vh] text-white text-xl font-semibold pl-10 overflow-scroll">
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
  