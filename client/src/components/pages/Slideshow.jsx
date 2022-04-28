import React, { useState } from "react";
import "./Slideshow.css";
import image1 from "./images/abt1.jpg"
import image2 from "./images/abt2.jpg"
import image3 from "./images/abt3.jpg"
import image4 from "./images/abt4.jpg"
import image5 from "./images/abt5.jpg"

const colors = [
  {image: image1 },
  {image: image2 },
  {image: image3 },
  {image: image4 },
  {image:image5 }]
const delay = 2500;

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((image, index) => (
          <img className="slide" src={image.image} alt="travel image"/>
        ))}
      </div>
      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
