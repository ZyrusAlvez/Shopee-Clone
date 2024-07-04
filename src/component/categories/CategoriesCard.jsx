import "./CategoriesCard.css"

export default function CategoriesCard({title, img_url}){
    return (
        <div className="CategoriesCard">
            <div style={{backgroundImage: `url(${img_url})`, backgroundSize: "contain", width: "200px", height: "200px"}} className="img"></div>
            <div className="title">{title}</div>
        </div>
    )
}