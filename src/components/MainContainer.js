import { BG_URL } from "../utils/constant";
import SideBar from "./SideBar";
const MainContainer = () => {

    return (
      <div className="flex h-[100%] relative">
        <SideBar />
        <section className=" w-full mr-0">
            <img src={BG_URL} alt="BG" />
        </section>
      </div>
    );
  };
  
  export default MainContainer;
  