import React from "react";
import notion from "../../assets/images/common/notion.png";
import "./Footer.scss";

function FooterPage(){
    return(
        <footer className="footer">
            <div className="footer_wrapper">
            <div>
                <div className="pd3">
                    <h1>
                    Contact Us
                    </h1>
                </div>
                <div className="pd3">
                    <a href="https://www.notion.so/Comssa-42d6c98b7d044b2687a597035b1777ee">
                        <img src={notion} width="50px" alt=""/>
                    </a>
                </div>
                <div className="pd3">
                <span className='white'>&copy; {new Date().getFullYear()} Copyright:{' '}</span>
                <a className='white' href='https://edu.ssafy.com/'>
                    SSAFY.com
                </a>
            </div>
            </div>
            </div>
        </footer>
    );
}

export default FooterPage;