import React from "react";
import "../App.css";

const Images = ({ images }) => {
  return (
    <div className="maindiv">
      {images.map((data) => {
        return (
          <div key={data.id} className="photo card-h">
            <img src={data.urls.regular} alt="api" />
          </div>
        );
      })}
    </div>
  );
};

export default Images;
