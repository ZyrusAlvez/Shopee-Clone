import style from "./FlashDeals.module.css";
import { useEffect, useState, useRef } from "react";
import format from "./format";

export default function FlashDeals() {

  const time = useRef(86400)
  const [displayTime, setDisplayTime] = useState(format(time.current))

  useEffect(() => {
    const interval = setInterval(() => {
      time.current -= 1;
      setDisplayTime(format(time.current));
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
    // The cleanup function from the first execution runs, clearing the interval, ensuring no duplicate intervals exist.
  }, []);

  return (
    <div className={style.main}>
      <div className={style.upperDiv}>
        <div className={style.title}>Flash Deals</div>
        <div className={style.timerDiv}>
          <div className={style.timer}>{displayTime[2]}</div>
          <div className={style.timer}>{displayTime[1]}</div>
          <div className={style.timer}>{displayTime[0]}</div>
        </div>
      </div>
      
    </div>
  );
}
