import { useState } from "react";
import Dropdown from "../components/icon/Dropdown"
import CartStruct from "../components/item/CartStruct"

const DropdownCart = (props) => {
    const [index, setIndex] = useState(null);
    const [data, setData] = useState(props.data);
    console.log(data);
    const chgIndex = (index) => {
        setIndex(index);
    }

    return(
        <div>
            <div>
                <Dropdown key={data.id} data={data} idx={index} chgIndex={chgIndex}/>
            </div>
            <div>
                {
                    index ? 
                    <div>
                        <CartStruct key={data.id} data={data[index]} />
                    </div>
                    :                    
                    <div>
                        <b>컴퓨터를 선택해 주세요.</b>
                    </div>
                }
            </div>
        </div>
    )
}

export default DropdownCart;