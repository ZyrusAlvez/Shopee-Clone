import style from "./css/Cart.module.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  return (
    <div className={style.cart}>
      <FaShoppingCart className={style.icon} />
    </div>
  );
}
