import React from "react";

const ShowImages = ({ image }) => {
  console.log(image);
  return (
    <div className="photo">
      <img src={image.urls.regular} alt="mock-api" />
    </div>
  );
};

export default ShowImages;
