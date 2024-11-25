import { useState, useEffect, useCallback } from "react";
import { ReactTyped } from "react-typed";
import BackgroundImg from "../assets/bg.png";
import "react-calendar/dist/Calendar.css";
import iPhoneImage from "../assets/gameboy.png";

// Import invader images
import Inv1 from "../assets/inv1.png";
import Inv2 from "../assets/inv2.png";
import Inv3 from "../assets/inv3.png";
import Inv4 from "../assets/inv4.png";
import Inv5 from "../assets/inv5.png";
import Inv6 from "../assets/inv6.png";

export const Hero = () => {
  const [stars, setStars] = useState([]);
  const [dispersed, setDispersed] = useState(false);

  

  const createStar = useCallback((index) => {
    return {
      id: index,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.1,
    };
  }, []);

  useEffect(() => {
    const initialStars = Array.from({ length: 100 }, (_, i) => createStar(i));
    setStars(initialStars);
  }, [createStar]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      setStars((prevStars) =>
        prevStars.map((star) => {
          const dx = star.x - clientX;
          const dy = star.y - clientY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            const force = (100 - distance) / 100; // Proximity-based force
            return {
              ...star,
              x: star.x + Math.cos(angle) * force * 5,
              y: star.y + Math.sin(angle) * force * 5,
            };
          }

          return star;
        })
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    setDispersed(true);
    setTimeout(() => setDispersed(false), 2000);
  };

  return (
    <div className="h-full w-full bg-white">
      <div className="flex items-center relative">
        <img
          src={BackgroundImg}
          className="top-0 left-0 w-full h-full object-cover"
          alt="Background"
        />
        <div className="absolute">
          <h1
            className="z-20 pl-20 text-2xl flex pb-50 text-purple-300 text-start hover:text-gray-600 hover:cursor-pointer font-medium"
            style={{ fontFamily: "GameBoy6x6, sans-serif" }}
          >
            <ReactTyped
              strings={["Introducing SignVision"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h1>
          <p
            className="z-20 text-white text-xl pl-20 pt-10"
            style={{ fontFamily: "monospace" }}
          >
            SignVision is an innovative app designed to help users <br /> detect
            and interpret American Sign Language (ASL) <br /> gestures in
            real-time. It enables seamless communication <br /> by recognizing
            ASL signs through camera input and <br /> translating them into
            readable text for users.
          </p>
        </div>

        <div
          className="fixed inset-0 w-full h-full pointer-events-none"
          style={{
            background: "transparent",
            zIndex: 2,
          }}
          onClick={handleClick}
        >
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: "white",
                left: `${star.x}px`,
                top: `${star.y}px`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>

        {/* Right div - iPhone with Calendar */}
        <div className="absolute right-10 bottom-0 flex flex-col items-center pb-[150px]">
          <div className="relative pr-[50px]">
            {/* iPhone Image */}
            <img
              src={iPhoneImage}
              alt="iPhone 15"
              className="w-[500px] h-[650px] object-cover z-20 hover:scale-105 float-animation"
            />
          </div>
        </div>
        {/* Animated Space Invader */}
        <img
          src={Inv1}
          className="invader animate-invader1 w-[80px] h-[80px]"
          alt="Invader 1"
        />
        <img
          src={Inv2}
          className="invader animate-invader2 w-[80px] h-[80px]"
          alt="Invader 2"
        />
        <img
          src={Inv3}
          className="invader animate-invader3 w-[80px] h-[80px]"
          alt="Invader 3"
        />
        <img
          src={Inv4}
          className="invader animate-invader4 w-[80px] h-[80px]"
          alt="Invader 4"
        />
        <img
          src={Inv5}
          className="invader animate-invader5 w-[80px] h-[80px]"
          alt="Invader 5"
        />
        <img
          src={Inv6}
          className="invader animate-invader6 w-[80px] h-[20px]"
          alt="Invader 6"
        />
      </div>
    </div>
  );
};

export default Hero;



