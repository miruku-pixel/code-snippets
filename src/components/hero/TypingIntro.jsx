import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypingIntro = () => {
  return (
    <div
      className="text-center text-2xl md:text-4xl 
    font-bold mt-20"
    >
      <h1 className="text-gray-800">
        Hi, Welcome to Miruku PixeL! —{" "}
        <span className="text-white">
          <Typewriter
            words={["Web Dev.", "Designer.", "Dreamer.", "Freelancer."]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypingIntro;
