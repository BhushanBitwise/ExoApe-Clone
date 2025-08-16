import { Power4} from "gsap";
import { motion } from "motion/react";
function Landing() {

  return (
    <div className="relative w-full h-[150vh] sm:h-[250vh] bg-zinc-900">
        <div  className=" picture w-full h-full overflow-hidden">
            <img data-scroll data-scroll-speed="-1"  className="w-full h-full object-cover" src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" alt="" />
        </div>
        <div className="w-full absolute top-0">
                <div className=" text-white  text max-w-screen-2xl h-full mx-auto sm:px-17 px-5">
                    <div className="para mt-72 sm:mt-42 sm:opacity-[98%]">
                        {["Global digital design studio partnering","with brands and businesses that create",
                            "exceptional experiences where people",
                            "live, work, and unwind."].map((item,index)=>{
                                return <p key={index} className="text-lg masker font-semibold sm:text-2xl">
                                        <motion.span 
                                        initial={{ opacity: 0, rotate: 10, y: "0%" }}
                                        animate={{ opacity: 1, rotate: 0, y: "0%" }}
                                        transition={{ delay: index*.1, duration: 1.5, ease: Power4.easeInOut,  }}
                                        className="inline-block origin-left"
                                        >{item}</motion.span>
                                        </p>
                            })}

                    </div>
                    <div className="headigs mt-7 sm:mt-5">
                        {["Digital","Design","Experience"]
                        .map((item,index)=>{
                            return <h1 key={index} className="text-6xl tracking-tighter leading-none sm:text-[16vw] sm:font-semibold ">
                                <motion.span 
                                        initial={{ opacity: 0, rotate: 10, y: "0%" }}
                                        animate={{ opacity: 1, rotate: 0, y: "0%" }}
                                        transition={{ delay: 1+index*.5, duration: 2, ease: Power4.easeInOut,  }}
                                        className="inline-block origin-left"
                                        >{item}</motion.span>
                                </h1>
                        })}
                        
                    </div>
                    <div className="sm:w-1/2 para2 mt-20">
                        <p className="text-lg font-semibold sm:text-2xl sm:tracking-tighter sm:opacity-[80%]">We help experience-driven companies thrive by making their audience 
                            feel the refined intricacies of their brand and product in the 
                            digital space. Unforgettable journeys start with a click.
                        </p>
                        <a className="sm:text-xl border-b-[1.5px] mt-10 inline-block border-zinc-100 pb-1" href="#">The Studio</a>
                    </div>
                </div>
        </div>
        
    </div>
  )
}
export default Landing;


