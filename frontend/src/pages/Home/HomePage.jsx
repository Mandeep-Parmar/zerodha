import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../../components/OpenAccount";

const HomePage = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      {!token && <OpenAccount />}
    </>
  );
};

export default HomePage;
