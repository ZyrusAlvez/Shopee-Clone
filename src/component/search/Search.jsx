import { CiSearch } from "react-icons/ci";
import "./Search.css"

export default function Search (){
    return (
        <form className="Search">
            <input placeholder="Sign Up and get 100% OFF on your first order"/>
            <button>
                <CiSearch className="icon"/>
            </button>
        </form> 
    )
}