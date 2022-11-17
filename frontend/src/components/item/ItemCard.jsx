
import del from "../../assets/images/recommend/delete.png";
import "./ItemCard.scss";
import ToggleSwitch from "./ToggleSwitch";

import { useRecoilState } from "recoil";
import { nameState, recommendState, estimateState } from "../../recoil/atom";


const ItemCard = (props) => {

    //로컬 데이터 초기값.
    const names = useRecoilState(nameState);
    const namedata = names[0].names;
    
    //자동 추천 request 요청시 보내는 데이터
    const [recommend, setRecommend] = useRecoilState(recommendState);
    // console.log(recommend);

    //자동 추천 response 받는 데이터
    const [estimate, setEstimate] = useRecoilState(estimateState);
    // console.log(estimate);


    const estimateDeletePartsHandler = () => {
        let tmp = [];
        estimate.map((item) => {
            if(item.idx ==  props.idx){
                tmp.push(
                    {
                        idx: props.idx,
                        Detail : null
                    }
                )
            }else{
                tmp.push(item);
            }
        })
        console.log(tmp);
        setEstimate(tmp);
    }
    // console.log(namedata[props.idx]);
    return (
        <div className="bd-s bdw-3 p-1 m-2 br-100">
            <div className="bd-s bdw-3 p-2 m-1 br-100 flex">
            {namedata[props.idx].name}
                <div className="flex">
                    <ToggleSwitch idx={props.idx}/>
                </div>
            </div>
            {
                !!(estimate[props.idx].Detail) ? <>
                <div className="bd-s bdw-3 pb-3 br-100 flex">
                    <div className="pt-1"><img src={`${estimate[props.idx].Detail.imgSrc}`} width="64vw" height="auto"/></div>
                    <div className="asd pt-3 notoBold fs-18 ellipsis relative mt-2 w-60p">{estimate[props.idx].Detail.title}</div>
                    <div>
                        <div className="pt-3 mt-1">
                            {/**삭제 버튼 */}
                            <button className="custombtn" onClick={estimateDeletePartsHandler}>
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