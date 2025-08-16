import { useEffect, useRef } from "react";
import gsap ,{Linear,Power4,ScrollTrigger} from "gsap/all";

function Images(){
//   const parent=useRef(null);
//   const first=useRef(null);
//   const sec=useRef(null);
//   const third=useRef(null);
//   const four=useRef(null);

//   useEffect(()=>{
//     gsap.registerPlugin(ScrollTrigger);
//     var t1=gsap.timeline({
//         scrollTrigger:{
//         trigger:parent.current,
//         top:"0 0",
//         pin:true,
//         scrub:1,
//         // markers:true
//        },
//     })
//     t1
//     .to(first.current,{
//         x:"50%",
//         scale:2,
//         ease:Linear
//     }, 'a')
//     .to(third.current,{
//         x:"-10%",
//         scale:2,
//         ease:Linear
//     }, 'a')
//     .to(sec.current,{
//         x:"10%",
//         y:"10%",
//         scale:2,
//         ease:Linear
//     }, 'a')
//     .to(four.current,{
//         x:"-30%",
//         scale:2,
//         ease:Linear
//     }, 'a')
//   })

 const parent = useRef();
  const first = useRef();
  const second = useRef();
  const third = useRef();
  const forth = useRef();
  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "top 90%",
        scrub: 1,
        ease: Power4,
      },
    });
    tl.to(
      first.current,
      {
        x: "-40%",
      },
      "a"
    )
      .to(
        second.current,
        {
          x: "40%",
        },
        "a"
      )
      .to(
        third.current,
        {
          x: "-20%",
        },
        "a"
      )
      .to(
        forth.current,
        {
          x: "30%",
        },
        "a"
      );
  });
   

    return(
        <div ref={parent} className="w-full h-[70vh] sm:h-[100vh] bg-white flex items-center justify-center">
            <div className="w-[40%] sm:w-[25%] sm:h-[90%] h-1/2 relative ">
                <div ref={first} className="absolute w-20 sm:w-40 sm:h-[15rem]  h-[7rem] -right-1/3 top-6 ">
                    <img className="h-full w-full object-cover"
                        src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
                        alt="" />
                </div>
                <div ref={second} className="absolute w-[8rem] sm:w-[18rem] aspect-video -left-2/3 top-1/3 ">
                        <video
                        autoPlay
                        muted
                        loop
                        src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
                        ></video>
                </div>
                <div ref={third} className="absolute w-[10rem] sm:w-[16rem] -sm:left-[80%]  aspect-video -left-[70%] -bottom-9 ">
                    <img
                     className="h-full w-full object-cover"
                        src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
                        alt=""/>
                </div>
                <div ref={forth} className=" absolute w-[10rem] sm:w-[16rem] aspect-[1.5/1] -right-[70%] -bottom-[37%] sm:-bottom-[25%] sm:">
                        <video
                            muted
                            autoPlay
                            loop
                            className="h-full w-full object-cover"
                            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
                            ></video>
                </div>

                <img className="w-full h-full object-cover" src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)   " alt="" />
            </div>
        </div>

    )
}
export default Images;