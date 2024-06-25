import "./css/UpperLeft.css"
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineHelpOutline } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxDividerVertical } from "react-icons/rx";

export default function UpperLeft(){
    return (
        <div className="UpperLeft">
            <div className="notification">
                <IoMdNotificationsOutline className="icon"/>
                <div>Notification</div>
            </div>
            <div className="help">
                <MdOutlineHelpOutline className="icon"/>
                <div>Help</div>
            </div>
            <div className="english">
                <CiGlobe className="icon"/>
                <div>English</div>
                <RiArrowDropDownLine className="icon"/>
            </div>
            <div className="log-in">
                <div>Sign Up</div>
                <RxDividerVertical className="div icon"/>
                <div>Log In</div>
            </div>
        </div>
    )
}