import { useEffect, useRef } from "react";
import gsap ,{Power4,ScrollTrigger} from "gsap/all";

function PlayReel() {
  const parent=useRef(null);
  const videodiv=useRef(null);
  const reel=useRef(null);
  const play=useRef(null);
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    var t1=gsap.timeline({
        scrollTrigger:{
        trigger:parent.current,
        top:"0 0",
        pin:true,
        scrub:1,
        // markers:true
       },
    })
    t1
    .to(videodiv.current,{
      width:"120%",
      height:"120%",
      ease:Power4
    })
    .to(play.current,{
        x:"-200%",
        scale:2,
        ease:Power4
    }, 'a')
    .to(reel.current,{
        x:"200%",
        scale:2,
        ease:Power4
    }, 'a')
  })
  return (
    <div ref={parent} className="w-full h-screen overflow-hidden relative bg-black">
        <div ref={videodiv} className="w-[11rem] sm:w-96 aspect-video  overflow-hidden  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <video muted loop autoPlay className="w-full h-full scale-[1.2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"></video>
        </div>
        <div className="overlay absolute w-full h-full  text-white flex flex-col justify-between py-20">
            <div className="w-full flex items-center justify-center gap-3 ">
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
                <h1>Work in Motion</h1>
            </div>
            <h1 className="w-full flex items-center justify-center gap-32 sm:gap-80"> 
                <div ref={play} className="text-5xl sm:text-9xl sm:font-semibold font-light">Play</div>
                <div ref={reel} className="text-5xl sm:text-9xl sm:font-semibold font-light">Reel</div>
            </h1>
            <p className="text-center px-10 text-xs">Our work is best experienced in motion. Don’t forget to put on your headphones.</p>
            
        </div>
    </div>
  )
}
export default PlayReel;
