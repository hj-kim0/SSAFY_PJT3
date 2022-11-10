import styled from "styled-components";
import dummy from "../../assets/images/sample.png";


const StyledButton = styled.button`
    background-color: inherit;
    border: none;
    width: 16px;
    height: 16px;
`

const ItemCard = (props) => {
    
    /* 
    data contains : img url, product idx, product name
    */
    const kind = props.kind;
    const data = props.data;

    return (
        <div className="bd-s bdw-1 p-3 m-2 br-100">
            <div className="bd-s bdw-1 p-3 m-2 br-100">
                {kind}
            </div>
            <div className="bd-s bdw-5 p-1 br-100 flex">
            {/* <img src={`${data.url}`}/> */}
            <img src={dummy}/>
            <div className="asd">{data.name}</div>
            <div>
                <StyledButton>
                <img src="" width="16px" height="16px"/>
                </StyledButton>
            </div>
            </div>
        </div>
    )
}

export default ItemCard;