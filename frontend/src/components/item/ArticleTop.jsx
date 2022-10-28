import React from "react";
import "./ArticleTop.scss";
import Top from "../../assets/images/top/dummytop.jpg";
function ArticleTop(){
    return(
        <div className="relative">
            <img
                className="object-cover w-full h-full"
                src={Top}
                alt=""
            />
            <div className="absolute w-11/12 lg:w-3/4 bottom-0 lg:right-0 bg:white">
                <div className="flex flex-col lg:flex-row bg-white p-10 -mx-2 lg:-mx-10">
                    <div className="w-full :w-6/12 lg:w-6/12 pb-10 lg:pb-0 text-left px-2 lg:px-10">
                        <p className="title uppercase">
                            CATEGORY OR TOPIC
                        </p>
                        <h3 className="pt-5">
                            Article title name goes here, across 2 lines
                        </h3>
                        <p>
                            MAY 28TH 2019
                        </p>
                    </div>
                    <div className="w-full lg:w-6/12 text-left px-2 lg:px-10">
                        <p className="p-5 pt-1 lg:pb-20 lg:pt-20">
                            text
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleTop;