import React from "react";
import "./App.css";
import Naviagtion from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition";
import Particles from "react-particles-js";
import particleOptions from "../src/particlesOption"
import "tachyons";


function App() {
  return (
    <div className="App">
      <Particles className="particles" params={particleOptions} />
      <Naviagtion />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition /> */}
    </div>
  );
}

export default App;
