import React from "react";
import "./Home.scss";
import ArticleTop from "../components/item/ArticleTop";
import ArticleBody from "../components/item/ArticleBody";
import Parallax from "../components/effect/Parallax";

function Home(){    

    return(<>
        <ArticleTop />
        <Parallax/> 
        <ArticleBody/>
    </>
    );
}

export default Home;