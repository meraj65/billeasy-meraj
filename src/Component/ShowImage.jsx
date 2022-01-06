import React from "react";

const ShowImages = ({ image }) => {
  console.log(image);
  return (
    <div className="photo">
      <img src={image.urls.regular} alt="" />
    </div>
  );
};

export default ShowImages;
