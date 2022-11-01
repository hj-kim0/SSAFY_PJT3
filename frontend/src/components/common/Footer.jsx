import React from "react";
import styled from "styled-components";
import notion from "../../assets/images/notion.png";
import { Col, Row, Container } from "react-bootstrap";

const Footer = styled.footer`
background-color:black;
text-align:center;
padding: 5px;
`;

const ContentHeader = styled.h1`
margin-top:40px;
padding: 5px;
font-size:32px;
color:white;
`

const DivCenter = styled.div`
margin-top:40px;
border: 5px;
padding: 5px;
color:white;
`

function FooterPage(){
    return(
        <footer className="footer">
            <div className="footer_wrapper">
            <div className="footer_body">
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