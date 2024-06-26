import { CiSearch } from "react-icons/ci";
import "./css/Search.css"

export default function Search ({search, setSearch}){

    return (
        <form className="Search">
            <input placeholder="Sign Up and get 100% OFF on your first order" 
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    onClick={() => setSearch("")}
                    />
            <button>
                <CiSearch className="icon"/>
            </button>
        </form> 
    )
}