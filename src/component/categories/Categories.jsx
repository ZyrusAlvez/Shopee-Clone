import "./Categories.css"
import CategoriesCard from "./CategoriesCard"

export default function Categories(){
    return(
        <div className="Categories">
            <div className="title">
                CATEGORIES
            </div>
            <div>
                <CategoriesCard title="Men's Apparel" img_url="https://down-ph.img.susercontent.com/file/2e9bfe13ce9cecfbfad8010b843651f6_tn"/>
            </div>
        </div>
    )
}