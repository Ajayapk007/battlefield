import Footer from "./Footer";
import Header from "./Header";
import HeroContainer from "./MainContainer";

const Body = () => {

  return (
    <div className=" h-[calc(100%-1.5rem)]" >
        <Header />
        <HeroContainer />
        {/* <Footer />   */}
    </div>
  );
};

export default Body;
