import { useState, useEffect } from "react";
import door from "./door.jpg";
import graduation from "./graduation.jpg";
import lab from "./lab.webp";
import launch from "./launch.jpg";
import Button from "./Button";
const images = [door, graduation, lab, launch];

const Images = () => {
  const [img, setImg] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const idx = images.indexOf(img);
      setImg(images[(idx + 1) % images.length]);
    }, 4500);
    return () => clearInterval(interval);
  }, [img]);

  return (
    <div
      className="container
      "
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="containerElem">
        <h1>Our achievements</h1>
        <div className="cbtn">
          <Button type="btn" text="login" className="btnLin" />
        </div>
      </div>
    </div>
  );
};

export default Images;
