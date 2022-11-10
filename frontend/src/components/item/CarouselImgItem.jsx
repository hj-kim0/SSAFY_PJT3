import React from "react";
import styled from "styled-components";

const Img = styled.img`
width: 100%;
height: 100vh;
`

const CarouselImgItem = (props) => {

    return (
        <>
            <Img src={props.item.src}/>
            <div className="opacity3 "></div>
        </>
    )
}

export default CarouselImgItem;