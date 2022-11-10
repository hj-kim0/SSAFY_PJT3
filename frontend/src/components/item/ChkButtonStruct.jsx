import { useState } from "react";
import "./ChkButtonStruct.scss";

const ChkButtonStruct = (props) => {

    const text = props.text;
    //클릭 여부
    const [status, setStatus] = useState(true);
    
    const chgStatus = () => {
        setStatus(!status);
    }

    const getActiveClass = (s, className) => 
        status === s ? className : "";

    return (
        <div className="p-2 m-1">
            <button
            className={` 
            custom-btn btn-3 ${getActiveClass(true, "active-buttons")}`}
            onClick={() => {
                chgStatus();
            }}
            >
                <span>{text}</span>
            </button>
        </div>
    )
}

export default ChkButtonStruct;