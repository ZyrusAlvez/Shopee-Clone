import style from "./css/Header.module.css";
import UpperRight from "./UpperLeft";
import UpperLeft from "./UpperRight";
import Search from "./Search";
import CommonSearch from "./CommonSearch";
import Logo from "./Logo";
import Cart from "./Cart";

import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className={style.header}>
      <div className={style.topDiv}>
        <UpperRight />
        <UpperLeft />
      </div>

      <div className={style.lowDiv}>
        <Logo />
        <div className={style.searchDiv}>
          <Search search={search} setSearch={setSearch} />
          <CommonSearch setSearch={setSearch} />
        </div>
        <Cart />
      </div>
    </header>
  );
}
