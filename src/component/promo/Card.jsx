import style from "./Card.module.css";

export default function Card({ logo, title }) {
  return (
    <div className={style.card}>
      <div className={style.logoDiv}>{logo}</div>
      <div className={style.title}>{title}</div>
    </div>
  );
}
