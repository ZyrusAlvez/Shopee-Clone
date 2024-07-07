import { CiSearch } from "react-icons/ci";
import style from "./css/Search.module.css";

export default function Search({ search, setSearch }) {
  return (
    <form className={style.search}>
      <input
        className={style.input}
        placeholder="Sign Up and get 100% OFF on your first order"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onClick={() => setSearch("")}
      />
      <button className={style.btn}>
        <CiSearch className={style.icon} />
      </button>
    </form>
  );
}
