import style from "./css/UpperLeft.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";

export default function UpperLeft() {
  return (
    <div className={style.UpperLeft}>
      <div className={style.item}>Seller Centre</div>
      <RxDividerVertical className={style.div} />
      <div className={style.item}>Start Selling</div>
      <RxDividerVertical className={style.div} />
      <div className={style.item}>Download</div>
      <RxDividerVertical className={style.div} />
      <div className={style.item}>Follow us on </div>
      <FaFacebook className={style.fb} />
      <FaInstagram className={style.ig} />
    </div>
  );
}
