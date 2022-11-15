
import del from "../../assets/images/recommend/delete.png";
import "./ItemCard.scss";
import ToggleSwitch from "./ToggleSwitch";

const ItemCard = (props) => {

    const data = props.data;
    const recom = props.recom;
    const name = props.name;

    return (
        <div className="bd-s bdw-3 p-1 m-2 br-100">
            <div className="bd-s bdw-3 p-2 m-1 br-100 flex">
                {name} <div className="flex">
                    <ToggleSwitch recom={recom}/>
                    </div>
            </div>
            {
                !!(data) ? <>
                <div className="bd-s bdw-3 pb-3 br-100 flex">
                <div className="pt-1"><img src={`${data.imgSrc}`} width="64vw" height="auto"/></div>
                <div className="asd pt-3 notoBold fs-18 ellipsis relative mt-2 w-60p">{data.title}</div>
                <div>
                <div className="pt-3 mt-1">
                    <button className="custombtn" onClick={() => {}}>
                        <img src={del} width="32px" height="32px"/>
                    </button>
                    
                </div>
                
            </div>
            
            </div>
            </> : <></>
                
            }
            
        </div>
    )
}

export default ItemCard;