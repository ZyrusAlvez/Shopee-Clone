import "./css/Header.css"
import UpperRight from "./UpperRight";
import UpperLeft from "./UpperLeft";
import Search from "../search/Search";

export default function Header(){
    return(
        <header>
            <div className="top-div">
                <UpperRight/>
                <UpperLeft/>
            </div>
            <div>
                <Search/>
            </div>
        </header>
    );
}