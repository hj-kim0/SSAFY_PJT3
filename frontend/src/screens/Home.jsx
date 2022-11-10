import React from "react";
import "./Home.scss";
import ArticleTop from "../components/item/ArticleTop";
import ArticleBody from "../components/item/ArticleBody";
import Parallax from "../components/effect/Parallax";


import { getTest } from "../apis/testAPI";

function Home(){    

    const onClickTest = () => {
        const responseData = getTest();
        console.log(responseData);
    }

    return(<>
        <ArticleTop />
        <Parallax/> 
        <ArticleBody/>
        <button onClick={onClickTest}>테스트</button>
    </>
    );
}

export default Home;