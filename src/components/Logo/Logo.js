import React from "react";
import Tilt from "react-tilt";
import wand from "./magic-wand.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br4 shadow-3"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img style={{paddingTop: '40px'}} src={wand} alt="magic-wand" />
          <p>Wizard</p>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
