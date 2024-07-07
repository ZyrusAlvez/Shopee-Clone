import style from "./Promo.module.css";
import Card from "./Card.jsx";
import { FaCoins } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { FaCheckSquare } from "react-icons/fa";
import { GiLargeDress } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";

export default function Promo() {
  return (
    <div className={style.promo}>
      <Card logo={<FaCoins className={style.logo} />} title="Coins Rewards" />
      <Card
        logo={<CiDeliveryTruck className={style.logo} />}
        title="Free Shipping"
      />
      <Card
        logo={<FaShoppingBag className={style.logo} />}
        title="Shopee Mall"
      />
      <Card
        logo={<TbTruckReturn className={style.logo} />}
        title="Return on the Spot"
      />
      <Card
        logo={<FaCheckSquare className={style.logo} />}
        title="Shopee Choice Daily ₱299"
      />
      <Card
        logo={<GiLargeDress className={style.logo} />}
        title="Shopee Styles"
      />
      <Card logo={<GiLipstick className={style.logo} />} title="Shopee Beauty" />
      <Card
        logo={<FaCartArrowDown className={style.logo} />}
        title="Shopee Supermarket"
      />
      <Card logo={<FaLaptop className={style.logo} />} title="Gadget Zone" />
      <Card
        logo={<MdDiscount className={style.logo} />}
        title="Partner Promos"
      />
    </div>
  );
}
