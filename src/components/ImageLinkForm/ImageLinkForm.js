import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onChangeInput, onButtonSubmit }) => {
  return (
    <div>
      <p>{`This Wizard will detect faces in your picture, Give it a try.`}</p>
      <div className="center">
        <div className="pa4 br4 shadow-5 form center">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onChangeInput}
          />
          <button
            className="pointer w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
