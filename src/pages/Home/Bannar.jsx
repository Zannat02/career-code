

import React, { useState, useEffect } from 'react';
import { motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg"

const useIsLargeScreen = () => {
  const [isLarge, setIsLarge] = useState(
    typeof window !== "undefined" ? window.matchMedia("(min-width: 1024px)").matches : true
  );

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const handler = (e) => setIsLarge(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isLarge;
};

const Bannar = () => {
  const isLarge = useIsLargeScreen();

  return (
    <div className="hero bg-base-200 min-h-96 overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 flex flex-col items-center lg:block overflow-hidden">
          <motion.img
            src={team1}
            animate={{ y: isLarge ? [100, 150, 100] : [30, 55, 30] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="max-w-[70%] sm:max-w-[60%] lg:max-w-sm border-blue-500 border-s-8 border-b-8 rounded-br-[40px] rounded-t-[40px] shadow-2xl"
            style={{ willChange: "transform" }}
          />
          <motion.img
            src={team2}
            animate={{ x: isLarge ? [100, 150, 100] : [20, 40, 20] }}
            transition={{ duration: 10, delay: 2, repeat: Infinity }}
            className="max-w-[55%] sm:max-w-[48%] lg:max-w-xs border-blue-500 border-s-8 border-b-8 rounded-br-[40px] rounded-t-[40px] shadow-2xl"
            style={{ willChange: "transform" }}
          />
        </div>
        <div className="flex-1 text-center lg:text-left">

          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 4 } }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold">Remote  <motion.span
              animate={
                {
                  color: ["#F54927", "#80ED13", "#840BE0"],
                  transition: { duration: 4, repeat: Infinity }
                }
              }
            >Jobs</motion.span>  For You!</motion.h1>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Bannar;