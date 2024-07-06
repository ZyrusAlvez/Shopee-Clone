import "./css/Header.css";
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
    <header>
      <div className="top-div">
        <UpperRight />
        <UpperLeft />
      </div>

      <div className="low-div">
        <Logo />
        <div className="search-div">
          <Search search={search} setSearch={setSearch} />
          <CommonSearch setSearch={setSearch} />
        </div>
        <Cart />
      </div>
    </header>
  );
}
