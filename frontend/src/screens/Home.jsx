import React from "react";
import "./Home.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import ArticleTop from "../components/item/ArticleTop";

function Home(){    
    return(
    <ParallaxProvider>
        <ArticleTop/> 
        <div className="py-40 lg:py-20"></div>
        <div className="py-40 lg:py-20"></div>
        <div>dsdsds</div>
    </ParallaxProvider>
    );
}

export default Home;