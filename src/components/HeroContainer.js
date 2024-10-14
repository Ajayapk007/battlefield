import card1 from "../utils/imgs/card1.jpg";
import DTM from "../utils/imgs/Dtm1.png";
import Challenge from "../utils/imgs/challenge.png";
import { useState } from "react";
import Slider from "react-slick";

const HeroContainer = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className="relative z-0 h-full flex flex-col flex-1 overflow-y-auto ">
      <div className="relative overflow-hidden font-barlow z-[1] max-w-full mx-auto shadow-[0px_0px_24px_0px_#000000] xl:rounded-sm w-full md:mt-0 md:max-w-[90rempx]">
        <div className="swipper relative flex flex-row w-full p-7">
          <section className="card1 h-[32rem] mt-0 w-full min-w-full flex relative justify-center items-center flex-1 z-[2] bg-no-repeat bg-cover bg-[position:57%_0] md:h-[42.1875rem] md:bg-[position:50%_55%] md:landscape:bg-[position:85%_84%] lg:h-[35rem] !items-end md:!items-center ">
            <div className="w-full h-full !h-[auto] !w-[90%] lg:!w-full lg:!h-full">
              <div className="flex flex-col items-center justify-center h-full w-full lg:max-w-[420px] lg:ml-24 font-barlow bg-black bg-opacity-70  relative mb-8 md:mb-0 gap-4 md:gap-6">
                <img src={DTM} height="240" width="240" alt="TDM" />
                {/* <img src={}height="240" width="240" alt="TDM" /> */}
                <h1 className=" text-white text-3xl">Challenge Now</h1>
                <h1 className=" text-white text-3xl">
                  Enter fees is 499INR ONLY
                </h1>
                <h1 className=" text-white text-3xl">Explore more Events</h1>
              </div>
            </div>
          </section>

          <div className="flex justify-center items-center absolute z-[1000] bottom-5 left-0 right-0 gap-4 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 mx-8 md:mx-0">
            <div
              className="h-3.5 rounded-full cursor-pointer flex-1 md:w-[100px]
              bg-white/50 opacity-100 "
            ></div>
            <div
              className="h-3.5 rounded-full cursor-pointer flex-1 md:w-[100px]
             bg-white/50 opacity-50"
            ></div>
            <div
              className="h-3.5 rounded-full cursor-pointer flex-1 md:w-[100px]
        bg-white/50 opacity-50"
            ></div>
            <div
              className="h-3.5 rounded-full cursor-pointer flex-1 md:w-[100px]
        bg-white/50 opacity-50"
            ></div>
            <div
              className="h-3.5 rounded-full cursor-pointer flex-1 md:w-[100px]
        bg-white opacity-40"
            ></div>
            <div
              className="h-3.5 rounded-full cursor-pointer flex-1 md:w-[100px]
        bg-white/50 opacity-50"
            ></div>
            <div
              className="h-3.5 rounded-full cursor-pointer flex-1 md:w-[100px]
        bg-white/50 opacity-50"
            ></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
