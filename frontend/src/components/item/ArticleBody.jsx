import "./ArticleBody.scss";
import CardComponent from "./CardComponent";

function ArticleBody(){
    return(
        <div className="center m-15">
            <div className="stick">
            </div>
            <div className="p-15 bdr6 bd-3">
            <div className="flex">
                <div className="bd-3 flex mt-5" >

            <p className="gg">
                    견적 추천
                </p>
            <CardComponent/>
                </div>
                <div className="bd-3 flex mt-5">

            <CardComponent/>
            <p className="gg">
                    견적 비교
                </p>
                </div>
            </div>
            </div>
        </div>
        );
};


export default ArticleBody;