import style from "./css/CommonSearch.module.css";

export default function CommonSearch({ setSearch }) {
  const topSearch = [
    "Big Speaker Bluetooth 24 Inch",
    "Floor Sticker 60x60cm Sale",
    "Pamigay Cellphone",
    "B Pants For Women Buy 1 Take 1",
  ];

  return (
    <div className={style.commonSearch}>
      {topSearch.map((e, i) => (
        <div className={style.items} onClick={() => setSearch(topSearch[i])} key={i}>
          {e}
        </div>
      ))}
    </div>
  );
}
