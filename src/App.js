import React from "react";
import "./App.css";
import Naviagtion from "./components/Navigation/Navigation"
import Logo from "./components/Logo/Logo"
import ImageLinkForm from "./components/ImageLinkForm"
import FaceRecognition from "./components/FaceRecognition"
import 'tachyons'

function App() {
  return (
    <div className="App">
      <Naviagtion />
       <Logo />
      {/*<ImageLinkForm />
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
