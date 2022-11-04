import React from "react";
import notion from "../../assets/images/common/notion.png";
import "./Footer.scss";

function FooterPage(){
    return(
        <footer className="footer">
            <div className="footer_wrapper">
            <div className="footer_body flex">
                <div className="flex">
                <h5 className="fs-20">
                    Contact Us
                    </h5>
                <div className="pdl-10">
                    <a href="https://www.notion.so/Comssa-42d6c98b7d044b2687a597035b1777ee">
                        <img src={notion} width="20px" alt=""/>
                    </a>
                </div>
                <div className="pdl-10"><span className='white fs-10'>&copy; {new Date().getFullYear()} Copyright:{' '}</span>
                <a className='white fs-10' href='https://edu.ssafy.com/'>
                    SSAFY.com
                </a></div>
                </div>
                </div>
                <div>
                
            </div>
            </div>
        </footer>
    );
}

export default FooterPage;