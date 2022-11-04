import React from "react";
import "./Home.scss";
import ArticleTop from "../components/item/ArticleTop";
import ArticleBody from "../components/item/ArticleBody";
import Parallax from "../components/effect/Parallax";
import CartStruct from "../components/item/CartStruct";

function Home(){    
    return(<>
        <ArticleTop />
        <Parallax/> 
        <ArticleBody/>
    </>
    );
}

export default Home;