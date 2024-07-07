import style from "./css/UpperRight.module.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineHelpOutline } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxDividerVertical } from "react-icons/rx";

export default function UpperRight() {
  return (
    <div className={style.UpperRight}>
      <div className={style.notification}>
        <IoMdNotificationsOutline className={style.icon} />
        <div>Notification</div>
      </div>
      <div className={style.help}>
        <MdOutlineHelpOutline className={style.icon} />
        <div>Help</div>
      </div>
      <div className={style.english}>
        <CiGlobe className={style.icon} />
        <div>English</div>
        <RiArrowDropDownLine className={style.icon} />
      </div>
      <div className={style.sign}>
        <div>Sign Up</div>
        <RxDividerVertical className={`${style.div} ${style.icon}`} />
        <div>Log In</div>
      </div>
    </div>
  );
}
