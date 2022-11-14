import styled from "styled-components";
import del from "../../assets/images/recommend/delete.png";

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
            {
                !!(data) ? <>
                <div className="bd-s bdw-3 pb-3 br-100 flex">
                <img src={`${data.imgSrc}`} width="64vw" height="auto"/>
                <div className="asd pt-3 notoBold fs-18 ellipsis relative w-60p">{data.title}</div>
                <div>
                <div className="pt-2">
                <StyledButton>
                <img src={del} width="32px" height="32px"/>
                </StyledButton>
                </div>
            </div>
            </div>
            </> : <></>
                
            }
            
        </div>
    )
}

export default ItemCard;