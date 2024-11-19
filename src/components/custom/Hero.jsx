import React from "react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[35px] text-center mt-12 bg-slate-500">
        <span className="text-[#f56551]">
          {" "}
          Discover your next Adventure with AI:{" "}
          <br></br>
        </span>{" "}
        Your Personalised Iteraries at your fingertip
      </h1>
      <p className="text-xl text-grey-500 text-center">
        Your Personalised Iteraries at your fingertip
      </p>
      <Button>Get Started, It's free</Button>
    </div>
  );
}

export default Hero;
