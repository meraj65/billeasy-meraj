import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Images from "./Component/Images";

function App() {
  const [images, setimages] = useState([]);

  useEffect(() => {
    axios
      .get("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
      .then((res) => {
        setimages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="container pr-0 pl-0 mt-2">
      {images.urls}
      <div className="photos">
        {images.length > 0 && <Images images={images} />}
      </div>
    </div>
  );
}

export default App;
