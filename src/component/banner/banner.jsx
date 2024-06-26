import "./Banner.css"
import slideBanner1 from "../../assets/home-banner-slide-1.png"
import slideBanner2 from "../../assets/home-banner-slide-2.png"
import slideBanner3 from "../../assets/home-banner-slide-3.png"
import slideBanner4 from "../../assets/home-banner-slide-4.png"
import slideBanner5 from "../../assets/home-banner-slide-5.png"
import sideBanner1 from "../../assets/home-banner-1.png"
import sideBanner2 from "../../assets/home-banner-2.png"

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
            console.log(index.current);
        }, 4000);

        return () => clearInterval(interval); // Clear the interval when the component unmounts (clean up)
    }, [slideBanners]); 


    function selectFromDot(i){
        setCurrentSlide(slideBanners[i])
        index.current = i
        console.log(i)
    }

    return (
        <div className="Banner">
            <div className="banner-1-div">
                <img src={currentSlide}/>
                
                <div className="carousel">
                    {slideBanners.map((e, i) => <div 
                    className={`dots ${index.current === i ? "active" : ""}`}
                    onClick={() => selectFromDot(i)} 
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