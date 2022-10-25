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
        <Footer>
            <Container>
                <Row>
                <Col xs={4}></Col>
                <Col xs={12} md={4}>
                    <ContentHeader className="text-uppercase">Contact Us</ContentHeader>
                    <br/>
                    <p>
                        <a href="https://www.notion.so/Comssa-42d6c98b7d044b2687a597035b1777ee">
                            <img src={notion} width="50px" alt=""/>
                        </a>
                    </p>
                </Col>
                <Col xs={4}></Col>
                </Row>
            </Container>+
            <DivCenter className='text-center p-3'>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-white' href='https://edu.ssafy.com/'>
                    SSAFY.com
                </a>
            </DivCenter>
        </Footer>
    );
}

export default FooterPage;