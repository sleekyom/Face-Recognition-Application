import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div>
      <div className="center">
        <div className="absolute mt3">
          <img src={imageUrl} alt="" width="300px" height="auto" />
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
