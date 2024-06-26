import "./Banner.css"
import slideBanner1 from "../../assets/home-banner-slide-1.png"
import slideBanner2 from "../../assets/home-banner-slide-2.png"
import slideBanner3 from "../../assets/home-banner-slide-3.png"
import slideBanner4 from "../../assets/home-banner-slide-4.png"
import slideBanner5 from "../../assets/home-banner-slide-5.png"
import sideBanner1 from "../../assets/home-banner-1.png"
import sideBanner2 from "../../assets/home-banner-2.png"

import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

import { useState, useEffect, useRef } from "react"

export default function Banner(){

    const slideBanners = [slideBanner1, slideBanner2, slideBanner3, slideBanner4, slideBanner5];

    const index = useRef(0)
    const [currentSlide, setCurrentSlide] = useState(slideBanners[index.current])
    
    useEffect(() => {
        const interval = setInterval(() => {
            index.current += 1;
            if (index.current >= slideBanners.length) {
                index.current = 0;
            }
            setCurrentSlide(slideBanners[index.current]);
        }, 4000);

        return () => clearInterval(interval); // Clear the interval when the component unmounts (clean up)
    }, [slideBanners]); 


    function showBanner(i){
        index.current = i
        if (index.current >= slideBanners.length) {
            index.current = 0;
        } else if (index.current < 0){
            index.current = slideBanners.length - 1
        }
        
        setCurrentSlide(slideBanners[index.current])
    }

    return (
        <div className="Banner">
            <div className="banner-1-div">
                <img src={currentSlide}/>

                <div className="button-right" onClick={() => showBanner(index.current + 1)}>
                    <IoMdArrowDropright />
                </div>
                <div className="button-left" onClick={() => showBanner(index.current - 1)}>
                    <IoMdArrowDropleft />
                </div>
                
                <div className="carousel">
                    {slideBanners.map((e, i) => <div 
                    className={`dots ${index.current === i ? "active" : ""}`}
                    onClick={() => showBanner(i)} 
                    key={i}></div>)}
                </div>

            </div>
            <div className="side-banner-div">
                <img src={sideBanner1}/>
                <img src={sideBanner2}/>
            </div>
        </div>
    );
}