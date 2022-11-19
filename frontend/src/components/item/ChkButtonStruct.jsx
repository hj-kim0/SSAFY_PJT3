import { useRecoilState } from "recoil";
import { cartState, purposeState, recommendState } from "../../recoil/atom";

import "./ChkButtonStruct.scss";

const ChkButtonStruct = (props) => {

    const [ recommend, setRecommend ] = useRecoilState(recommendState);

    const [ purpose, setPurpose ] = useRecoilState(purposeState);

    //선택된 애 -1이면 아무도 아님, 나머지는 해당 idx
    const [ select, setSelect ] = useRecoilState(cartState);
    //이름
    const text = props.text;
    //idx
    const idx = props.idx;
    
    const purposeUpdateHandler = () => {
        const recom = {...recommend};
        recom.purpose_program = purpose[idx].target;
        setRecommend(recom);
        console.log(recommend);
    }
    const getActiveClass = (s, className) => 
        (select === s) ? "" : className;


    const setSelectEventHandler = () => {
        (select === idx) ? setSelect(-1) : setSelect(idx)
    }

    return (
        <div className="p-2 m-1">
            <button
            className={` 
            custom-btn btn-3 ${getActiveClass(idx, "active-buttons")}`}
            onClick={() => {
                setSelectEventHandler();
                purposeUpdateHandler();
            }}
            >
                <span>{text}</span>
            </button>
        </div>
    )
}

export default ChkButtonStruct;