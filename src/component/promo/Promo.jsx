import "./Promo.css";
import PromoCard from "./PromoCard.jsx";
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

export default function Promo(){
    return(
        <div className="Promo">
            <PromoCard logo={<FaCoins className="logo"/>} title="Coins Rewards"/>
            <PromoCard logo={<CiDeliveryTruck className="logo"/>} title="Free Shipping"/>
            <PromoCard logo={<FaShoppingBag className="logo"/>} title="Shopee Mall"/>
            <PromoCard logo={<TbTruckReturn className="logo"/>} title="Return on the Spot"/>
            <PromoCard logo={<FaCheckSquare className="logo"/>} title="Shopee Choice Daily ₱299"/>
            <PromoCard logo={<GiLargeDress className="logo"/>} title="Shopee Styles"/>
            <PromoCard logo={<GiLipstick className="logo"/>} title="Shopee Beauty"/>
            <PromoCard logo={<FaCartArrowDown className="logo"/>} title="Shopee Supermarket"/>
            <PromoCard logo={<FaLaptop className="logo"/>} title="Gadget Zone"/>
            <PromoCard logo={<MdDiscount className="logo"/>} title="Partner Promos"/>
        </div>
    )
}