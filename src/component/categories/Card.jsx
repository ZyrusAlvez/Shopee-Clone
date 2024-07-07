import style from "./Card.module.css";

export default function Card({ title, img_url }) {
  return (
    <div className={style.Card}>
      <div style={{ backgroundImage: `url(${img_url})` }} className={style.img}></div>
      <div className={style.title}>{title}</div>
    </div>
  );
}
