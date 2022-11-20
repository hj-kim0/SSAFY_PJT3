import "./ArticleBody.scss";
import { Link } from "react-router-dom"


function ArticleBody(){
    return(
        <div className="center m-15">
            <div className="stick"/>
            <div className="p-15 bdr6 bd-3">
                <div className="flex">
                    <div className=" flex mt-5" >
                        <button class="btn-hover color-9"><Link className="a" to="/auto">견적 추천</Link></button>
                    </div>
                </div>
            </div>
            <div className="p-15">
                <div className="flex">
                    <div className=" flex mt-5" >
                        <button class="btn-hover color-9"><Link className="a" to="/compare">견적 비교</Link></button>
                    </div>
                </div>
            </div>
        </div>
        );
};


export default ArticleBody;