const menu=({id,title,category,price,desc,img})=>{
    return(
        <div className="food">
            <div className="image_food">
                <img src={img} alt={img} />
            </div>
            <div className="text">
                <h4>{title}</h4>
                <div className="price">${price}</div>
                <p>{desc}</p>
            </div>
        </div>
    )
}
export default menu;