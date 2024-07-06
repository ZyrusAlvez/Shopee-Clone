import "./Banner.css";
import slideBanner1 from "../../assets/home-banner-slide-1.png";
import slideBanner2 from "../../assets/home-banner-slide-2.png";
import slideBanner3 from "../../assets/home-banner-slide-3.png";
import slideBanner4 from "../../assets/home-banner-slide-4.png";
import slideBanner5 from "../../assets/home-banner-slide-5.png";
import slideBanner6 from "../../assets/home-banner-slide-6.png";
import sideBanner1 from "../../assets/home-banner-1.png";
import sideBanner2 from "../../assets/home-banner-2.png";

import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

import { useState, useEffect } from "react";

export default function Banner() {
  const slideBanners = [
    slideBanner1,
    slideBanner2,
    slideBanner3,
    slideBanner4,
    slideBanner5,
    slideBanner6,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex >= slideBanners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slideBanners.length]);

  function showBanner(i) {
    if (i >= slideBanners.length) {
      setIndex(0);
    } else if (i < 0) {
      setIndex(slideBanners.length - 1);
    } else {
      setIndex(i);
    }
  }

  return (
    <div className="Banner">
      <div className="banner-1-div">
        <img src={slideBanners[index]} alt="Banner slide" />

        <div className="button-right" onClick={() => showBanner(index + 1)}>
          <IoMdArrowDropright />
        </div>
        <div className="button-left" onClick={() => showBanner(index - 1)}>
          <IoMdArrowDropleft />
        </div>

        <div className="carousel">
          {slideBanners.map((_, i) => (
            <div
              className={`dots ${index === i ? "active" : ""}`}
              onClick={() => showBanner(i)}
              key={i}
            ></div>
          ))}
        </div>
      </div>
      <div className="side-banner-div">
        <img src={sideBanner1} alt="Side banner 1" />
        <img src={sideBanner2} alt="Side banner 2" />
      </div>
    </div>
  );
}
