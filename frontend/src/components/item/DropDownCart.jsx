import { useState } from "react";
import Dropdown from "../icon/Dropdown"
import CartStruct from "./CartStruct"

const DropdownCart = (props) => {
    const [index, setIndex] = useState(null);
    const chgIndex = (index) => {
        setIndex(index);
        props.setidx(index);
    }
    return(
        <div className="flex row">
            <div className="flex align-center fs-22 notoBold">{props.legend}</div>
            <div className="m-5 flex">
                <Dropdown key={props.data.idx} data={props.data} text={"컴퓨터를 선택해 주세요"} chgIndex={chgIndex}/>
            </div>
        </div>
    )
}

export default DropdownCart;