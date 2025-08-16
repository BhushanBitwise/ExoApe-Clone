import { Expo } from "gsap";
import { motion } from "motion/react";
import React from "react";

function Work() {
  return (
    <div className="w-full relative z-[4] bg-[#ffffff] md:pb-20 py-12 lg:px-20 md:px-12 sm:px-8 px-6 min-h-screen">
      <div className="text-7xl lg:text-[16vw] lg:mx-20 md:py-20 md:text-[18vw]">
        <h1 className="overflow-hidden">
          <motion.span
            initial={{ opacity: 0, rotate: 90, y: "40%" }}
            whileInView={{ opacity: 1, rotate: 0, y: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: Expo.easeOut }}
            className="inline-block origin-left"
          >
            Work{" "}
          </motion.span>{" "}
        </h1>
      </div>
      <div className="workpart lg:mx-20 flex flex-col gap-12">
        <div className="upperpartdiv lg:h-[70vw] lg:justify-between lg:gap-32 flex flex-col  md:flex-row-reverse gap-12">
          <div className="firtpartofthediv lg:w-[30%] md:w-[35%] md:justify-between flex flex-col gap-12">
            <div className="features mt-8 md:mt-0 flex flex-col gap-6">
              <div className="featuredworks flex item-center gap-3">
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon w-4"
                  data-v-669b4a84=""
                >
                  <path
                    d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                    fill="currentColor"
                    data-v-669b4a84=""
                  ></path>
                </svg>
                <h1 className="text-xl lg:text-xl md:text-2xl">
                  Featured Projects
                </h1>
              </div>
              <div className="featurestext">
                <p className="text-xl lg:text-[1.8vw] leading-[1.4] text-pretty">
                  Highlights of cases that we passionately built with
                  forward-thinking clients and friends over the years.
                </p>
              </div>
            </div>
            <div className="videos flex flex-col lg:mb:0 md:mb-32 gap-4">
              <div
              className="video overflow-hidden cursor-pointer relative h-[108vw] lg:h-[25vw] md:h-[40vw]  w-full">
                <motion.img
                initial={{opacity:1}}
                whileHover={{opacity:0}}
                data-scroll-speed="-2"
                  className="h-full videoimg hidden sm:block sm:absolute sm:z-[2] top-0  w-full object-cover"
                  src="https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)"
                  alt=""
                />
                <video
                  autoPlay
                  muted
                  loop
                  className="h-full block relative z-[1] w-full object-cover"
                  src="https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04"
                ></video>
              </div>
              <div className="caption flex lg:flex-row lg:gap-3 flex-col gap-1">
                <h1 className="text-lg leading-[1]">Amaterasu</h1>
                <h3 className="text-lg leading-[1] opacity-[0.5]">
                  Frontier Health Innovation
                </h3>
              </div>
            </div>
          </div>
          <div className="secondpartofthediv lg:w-[50%] md:w-[65%]">
            <div className="videos flex flex-col gap-4">
              <div className="video cursor-pointer relative h-[108vw] lg:h-[40vw] lg:self-start md:h-[80vw] w-full ">
                <motion.img
                initial={{opacity:1}}
                whileHover={{opacity:0}}
                data-scroll-speed="-2"
                  className="h-full videoimg hidden sm:block sm:absolute sm:z-[2] top-0  w-full object-cover"
                  src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
                  alt=""
                />
                <video
                  autoPlay
                  muted
                  loop
                  className="h-full block z-[1] w-full object-cover"
                  src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
                ></video>
              </div>
              <div className="caption flex lg:flex-row lg:gap-3 flex-col gap-1">
                <h1 className="text-lg leading-[1]">Columbia Pictures</h1>
                <h3 className="text-lg leading-[1] opacity-[0.5]">
                  Celebrating a Century of Cinema
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="bottompartdiv lg:h-[50vw] md:h-[100vw] md:gap-24 flex flex-col md:justify-between md:items-end md:pr-32 md:flex-row gap-12">
          <div className="videos flex flex-col md:w-[30%] gap-4">
            <div className="video cursor-pointer relative h-[108vw] lg:h-[25vw] md:h-[35vw] w-full">
              <motion.img
               initial={{opacity:1}}
                whileHover={{opacity:0}}
                data-scroll-speed="-2"
                className="videoimg h-full hidden sm:block absolute sm:absolute sm:z-[2] top-0  w-full object-cover"
                src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)"
                alt=""
              />
              <video
                autoPlay
                muted
                loop
                className="h-full block  z-[1] w-full object-cover"
                src="https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0"
              ></video>
            </div>
            <div className="caption flex flex-col lg:flex-row lg:gap-3 gap-1">
              <h1 className="text-lg leading-[1]">Cambium</h1>
              <h3 className="text-lg leading-[1] opacity-[0.5]">
                Pioneering Sustainable Solutions
              </h3>
            </div>
          </div>
          <div className="videos flex flex-col gap-4 lg:self-start md:self-center lg:w-[55%] md:w-[65%]">
            <div className="video cursor-pointer  relative h-[108vw] lg:h-[40vw]  md:h-[70vw] w-full">
              <motion.img
               initial={{opacity:1}}
                whileHover={{opacity:0}}
                data-scroll-speed="-2"
                className="h-full videoimg hidden sm:block absolute sm:absolute sm:z-[2] top-0  w-full object-cover"
                src="https://a.storyblok.com/f/133769/2400x2990/8f08135741/studio-d-hero.jpg/m/1300x1620/filters:quality(90)"
                alt=""
              />
              <video
                autoPlay
                muted
                loop
                className="h-full block  z-[1]  w-full object-cover"
                src="https://player.vimeo.com/progressive_redirect/playback/914798702/rendition/720p/file.mp4?loc=external&log_user=0&signature=b76cb0994de6beca7f6ba29e7eb52db1750d34600352dab2566c6ca16fcd817f"
              ></video>
            </div>
            <div className="caption flex lg:flex-row lg:gap-3 flex-col gap-1">
              <h1 className="text-lg leading-[1]">Studio D</h1>
              <h3 className="text-lg leading-[1] opacity-[0.5]">
                Urban and Landscape Design
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="seeallprojects border-b-2 lg:mt-24 cursor-pointer lg:mx-20 md:mt-20 w-fit border-b-[#01010199] mt-8">
        <h1 className="text-md md:text-[1.5vw]">Browse All Work</h1>
      </div>
    </div>
  );
}

export default Work;


