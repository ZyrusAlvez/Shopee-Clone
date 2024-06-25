import "./css/Header.css"
import UpperRight from "./UpperLeft";
import UpperLeft from "./UpperRight";
import Search from "./Search";
import CommonSearch from "./CommonSearch";

import { useState } from "react";

export default function Header(){

    const [search, setSearch] = useState("")

    return(
        <header>
            <div className="top-div">
                <UpperRight/>
                <UpperLeft/>
            </div>
            <div className="search-div">
                <Search search={search}/>
                <CommonSearch setSearch={setSearch}/>
            </div>
        </header>
    );
}