import React from "react";
import "./ArticleTop.scss";

const scrollToBody = () => {
    window.scrollTo({
        top: 790,
        behavior: 'smooth'
    })
}

function ArticleTop(){
    return(
        <div className="relative">
            <div className="relative banner"> 
            <div className="banner-txt fs-60 kyobo white">
                COM SSA
            </div> 
            </div>

            <button className="visual_scroll" onClick={scrollToBody}>
                <h5 className="NotoSansBold">내려서 더보기</h5>
                </button>
        </div>
    )
}

export default ArticleTop;