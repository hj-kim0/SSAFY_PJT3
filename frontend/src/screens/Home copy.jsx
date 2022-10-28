import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import CarouselImgItem from "../components/item/CarouselImgItem";
import "./Home.scss";
import RecipeReviewCard from "../components/item/CardComponent";

function Home(){    

    // const carouselidx = useState(0);

    // const items = [
    //     {
    //         idx: 0,
    //         src: require("../assets/images/carousel/0.jpg")
    //     },
    //     {
    //         idx: 1,
    //         src: require("../assets/images/carousel/1.jpg")
    //     },
    //     {
    //         idx: 2,
    //         src: require("../assets/images/carousel/2.jpg")
    //     },
    //     {
    //         idx: 3,
    //         src: require("../assets/images/carousel/3.jpg")
    //     },
        
    // ];

    // console.log(carouselidx);
    return(
        // <div id ="container">
        //     <Carousel
        //         index={carouselidx[0]}
        //         interval={4000}
        //         autoPlay
        //         animation="fade"
        //         indicators={false}
        //         stopAutoPlayOnHover
        //         swipe
        //     >
        //         {items.map((item, i) => (
        //             <CarouselImgItem key={i} item={item}/>
        //         ))}
        //     </Carousel>
        //     <div id = "inline">
        //         <RecipeReviewCard/>
        //         <RecipeReviewCard/>
        //     </div>
        // </div>
        <>
        
        </>
    );
}

export default Home;