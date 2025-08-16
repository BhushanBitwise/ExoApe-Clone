import React from "react";

function Footer() {
  return (
    <div data-scroll data-scroll-speed='-0.3'  className="z-[1] h-[155vw] lg:h-[120vh] overflow-hidden md:h-[55vh] text-[#E0CCBB] bg-[#090909] justify-end  lg:px-20 md:px-12 sm:px-8 px-6 w-full py-5 flex flex-col ">
      <div className="footerfirstdiv relative items-center justify-between flex">
        <div className="heading relative z-[1] lg:text-[10vw] md:text-8xl font-[light] sm:mt-20 text-7xl">
          <h1 className="leading-[1]">Our</h1>
          <h1 className="leading-[1]">Story</h1>
        </div>
        <div className="img overflow-hidden w-96  aspect-auto md:w-[75%] absoulute right-0 z-[2] top-0">
          <video
            className="w-full md:scale-[1] object-cover scale-[1.5] "
            autoPlay
            muted
            loop
            src="https://www.exoape.com/video/video-6.mp4"
          ></video>
        </div>
      </div>
      <div className="footerseconddiv py-12 lg:py-16 md:py-8 w-[90%] lg:w-[30%] md:w-[40%]">
        <p className="text-xl lg:text-2xl md:text-sm leading-[1.2] text-pretty">
          The story behind Exo Ape is one of exploration, creativity and
          curiosity.
        </p>
      </div>
      <div className="footerdiv w-full h-[0.4vw] md:h-[0.2vw] bg-[#E0CCBB] "></div>
      <div className="footerthirddiv flex py-8 lg:py-12 md:py-12 items-start md:gap-[20%] lg:gap-[15%] gap-[40%]  h-[30%] w-full">
        <div className="columndiv hidden md:flex  flex-col md:gap-2 gap-5">
          <h1 className="leading-[1] md:text-xs lg:text-lg text-sm cursor-pointer ">Willem II Singel 8</h1>
          <h1 className="leading-[1] md:text-xs lg:text-lg text-sm cursor-pointer ">6041 HS, Roermond</h1>
          <h1 className="leading-[1] md:text-xs lg:text-lg text-sm cursor-pointer ">The Netherlands</h1>
          <h1 className="leading-[1] md:text-xs lg:text-lg text-sm cursor-pointer ">
          hello@exoape.com
        </h1>
        </div>
        <div className="columndiv flex flex-col md:gap-2 gap-5">
          <h1 className="leading-[1] md:text-xs lg:text-lg text-sm cursor-pointer ">Work</h1>
          <h1 className="leading-[1] md:text-xs lg:text-lg text-sm cursor-pointer ">Studio</h1>
          <h1 className="leading-[1] md:text-xs lg:text-lg text-sm cursor-pointer ">News</h1>
          <h1 className="leading-[1] md:text-xs lg:text-lg text-sm cursor-pointer ">Contact</h1>
        </div>
        <div className="columndiv flex flex-col md:gap-2 gap-5">
          <h1 className="leading-[1] md:text-xs lg:text-lg text-sm cursor-pointer ">Behance</h1>
          <h1 className="leading-[1] md:text-xs lg:text-lg text-sm cursor-pointer ">Dribble</h1>
          <h1 className="leading-[1] md:text-xs lg:text-lg text-sm cursor-pointer ">Twitter</h1>
          <h1 className="leading-[1] md:text-xs lg:text-lg text-sm cursor-pointer ">Instagram</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;