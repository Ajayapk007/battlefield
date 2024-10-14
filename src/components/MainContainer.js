import HeroContainer from "./HeroContainer";
import SideBar from "./SideBar";
const MainContainer = () => {

    return (
      <div className="flex h-full relative bg-black">
        <SideBar />
        
        <HeroContainer />
      </div>
    );
  };
  
  export default MainContainer;
  