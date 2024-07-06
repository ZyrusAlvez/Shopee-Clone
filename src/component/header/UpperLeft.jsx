import "./css/UpperLeft.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";

export default function UpperLeft() {
  return (
    <div className="UpperLeft">
      <div class="item">Seller Centre</div>
      <RxDividerVertical className="div" />
      <div class="item">Start Selling</div>
      <RxDividerVertical className="div" />
      <div class="item">Download</div>
      <RxDividerVertical className="div" />
      <div class="item">Follow us on </div>
      <FaFacebook className="fb" />
      <FaInstagram className="ig" />
    </div>
  );
}
