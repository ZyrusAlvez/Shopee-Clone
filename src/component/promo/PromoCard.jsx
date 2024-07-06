import "./PromoCard.css";

export default function Card({ logo, title }) {
  return (
    <div className="PromoCard">
      <div className="logo-div">{logo}</div>
      <div className="title">{title}</div>
    </div>
  );
}
