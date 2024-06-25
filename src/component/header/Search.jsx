import { CiSearch } from "react-icons/ci";
import "./css/Search.css"

export default function Search ({search}){

    return (
        <form className="Search">
            <input placeholder="Sign Up and get 100% OFF on your first order" className="input" value={search}/>
            <button>
                <CiSearch className="icon"/>
            </button>
        </form> 
    )
}