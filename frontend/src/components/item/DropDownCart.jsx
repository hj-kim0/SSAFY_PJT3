import { useState } from "react";
import Dropdown from "../icon/Dropdown"
import CartStruct from "./CartStruct"

const DropdownCart = (props) => {
    const [index, setIndex] = useState(null);
    const [data, setData] = useState(props.data);
    console.log(data);
    const chgIndex = (index) => {
        setIndex(index);
    }

    return(
        <div>
            <div className="m-5">
                <Dropdown key={data.id} data={data} idx={index} text={"컴퓨터를 선택해 주세요"} chgIndex={chgIndex}/>
            </div>
            <div className="m-5 bd-s bdw-3 bdc-grey br-075 p-3" >
                {
                    index ? 
                    <div>
                        <CartStruct key={data.id} data={data[index]} />
                    </div>
                    :                    
                    <div className="flex center">
                        <b>컴퓨터를 선택해 주세요.</b>
                    </div>
                }
            </div>
        </div>
    )
}

export default DropdownCart;