import Image from "next/image"
import "./product.css";
import imageRating from "../../images/rating.png"
// import { Card } from "flowbite-react";



export default function ProductCard({id, thumbnail, title, price, rating}: {id: number, thumbnail: string, title: string, price:number, rating: number | boolean |any}){

    let imagePosition = `-83px -92px`;

    switch(rating >0){
        case rating < 1:
             imagePosition = `-83px -191px`;
             break;
        case rating <2:
             imagePosition = `-83px -46px`;
             break;
        case rating < 3:
             imagePosition = `-83px -176px`;
             break;
        case rating < 4:
             imagePosition = `-83px -148px`;
             break;
        case rating < 5:
             imagePosition = `-83px -120px`;
             break;
        default:
             imagePosition = `-83px -92px`;
             break;
    }




    const ratingStyle = {
        backgroundImage: `url('${imageRating.src}')`,
        backgroundSize: "512px 512px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: imagePosition,
        height: "14px",
        width: "60px",
        marginLeft: "0"
    }

    return (
        <div className="product-card">
            <Image
                        src={thumbnail}
                        alt={title}
                        width={300}
                        height={300} 
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading 
                        />
            <div className="product-card__content">
                <h3>{title}</h3>
                <div className="product-card__rating" style={{
                        display: "flex",
                        gap: "7px",
                        
                }}>
                    <span className="product-card__rating-value" style={ratingStyle}></span>
                    <span style={{margin: "10px"}} className="product-card__rating__count">{rating}</span>
                </div>
                <div className="product-card__action">
                    <p className="product-card__price">${price}</p>
                    <button className="product-card__button">Add to cart</button>
                </div>
            </div>
        </div>
    )
}
