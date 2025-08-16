import { Expo } from "gsap";
import { motion } from "motion/react";

function Spread()
{
    return(
        <div className="w-full bg-white py-20 ">
            <div className="max-w-screen-2xl h-[40%] sm:h-[100vh] sm:mt-10 mx-auto px-5 sm:px-17 ">
                    <div className="flex items-center justify-center  gap-5">
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
                            <h1 className="">In the Media</h1>
                    </div>
                    <div className="text mt-10 text-center ">
                        <h1  className="capitalize text-6xl sm:text-[9rem] tracking-tighter">
                           <motion.span
                                      initial={{ opacity: 0, rotate: 40, y: "40%" }}
                                      whileInView={{ opacity: 1, rotate: 0, y: "0%" }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 1, ease: Expo.easeOut }}
                                      className="inline-block origin-left"
                                    >
                                      Spread{" "}
                                    </motion.span>{" "}
                          
                          </h1>
                        <h1  className="capitalize text-6xl sm:text-[9rem] tracking-tighter">
                           <motion.span
                                      initial={{ opacity: 0, rotate: 40, y: "40%" }}
                                      whileInView={{ opacity: 1, rotate: 0, y: "0%" }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 1, ease: Expo.easeOut }}
                                      className="inline-block origin-left"
                                    >
                                      the news{" "}
                                    </motion.span>{" "}
                          </h1>
                        <p className="w-2/3 mx-auto mt-5 sm:text-[4vh] sm:font-semibold sm:opacity-[80%] sm:leading-6 text-md leading-4">Find out more about our work on these leading design and technology platforms.</p>
                        <a className=" font-semibold border-zinc-900 pb-[5rem] mt-5 inline-block  " href="#">Browser all news</a>
                    </div>
            </div>
        </div>
    )
}
export default Spread;