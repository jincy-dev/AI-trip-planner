import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-7">
      <h1 className="font-extrabold text-[35px] text-center mt-12">
        <span className="text-[#008080]">
          {" "}
          Discover your next Adventure with AI: <br></br>
        </span>{" "}
        Your Personalised Iteraries at your fingertip
      </h1>
      <p className="text-l text-grey-500 text-center">
        Effortless travel planning, tailored just for you. Explore, plan, and
        embark on unforgettable journeys in minutes.
      </p>
      <Link to={"/create-trip"}>
        <Button>Get Started, It's free</Button>
      </Link>
    </div>
  );
}

export default Hero;
