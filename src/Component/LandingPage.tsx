import React from "react";
import Hero from "./Hero";
import CoreValue from "./CoreValue";
import GetStarted from "./GetStarted"
import Resources from "./Resources";
// import DesignLanguage from "./DesignLanguage";


const LandingPage: React.FC =() =>{
  return (
    <div>
      <Hero />
      <CoreValue />
      <GetStarted />
      {/* <DesignLanguage /> */}
      <Resources />
    </div>
  );
}

export default LandingPage;