
import del from "../../assets/images/recommend/delete.png";
import "./ItemCard.scss";
import "./ToggleSwitch.scss";

import { useRecoilState } from "recoil";
import { nameState, recommendState, estimateState } from "../../recoil/atom";
import { useState } from "react";


const ToggleSwitch = (props) => {

    const [names, setNames] = useRecoilState(nameState);
    const [recommend, setRecommend] = useRecoilState(recommendState);

    const targetname = names.names[props.idx].data;

    const [isChecked, setIsChecked] = useState(props.isChecked);
    
    const ToggleChangeHandler = () => {
        const toggleChg = { ...recommend };
        console.log(toggleChg);
        switch(targetname){
            case `cpu` :
                toggleChg.cpu = (!toggleChg.cpu);
                setIsChecked(!isChecked);
                setRecommend(toggleChg);
                break;
            case `gpu` :
                toggleChg.gpu = (!toggleChg.gpu);
                setIsChecked(!isChecked);
                setRecommend(toggleChg);
                break;
            case `mainboard` :
                toggleChg.mainboard = (!toggleChg.mainboard);
                setIsChecked(!isChecked);
                setRecommend(toggleChg);
                break;
            case `memory` :
                toggleChg.memory = (!toggleChg.memory);
                setIsChecked(!isChecked);
                setRecommend(toggleChg);
                break;
            case `cooler` :
                toggleChg.cooler = (!toggleChg.cooler);
                setIsChecked(!isChecked);
                setRecommend(toggleChg);
                break;
            
            case `ssd` :
                toggleChg.ssd = (!toggleChg.ssd);
                setIsChecked(!isChecked);
                setRecommend(toggleChg);
                break;
            case `power` :
                toggleChg.power = (!toggleChg.power);
                setIsChecked(!isChecked);
                setRecommend(toggleChg);
                break;
            case `tower` :
                toggleChg.tower = (!toggleChg.tower);
                setIsChecked(!isChecked);
                setRecommend(toggleChg);
                break;
            default:
                console.log(toggleChg);
                break;
        }
    }

    return(
        <div>
			<div className={`tbutton ${isChecked?'on':''}`} onClick={()=>ToggleChangeHandler()}>
				<div className={`tcircle ${isChecked?'on':''}`}></div>
			</div>
		</div>
    )
}


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


    // console.log(props);

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
        <div className="p-1 m-2 br-100">
            <div className="bd-s bdw-1 m-1 br-100 flex top__cover">
                <div className="notoBold fs-24 flex justify-center align-center list__top">{namedata[props.idx].name}</div>
                <div className="flex">
                    <ToggleSwitch idx={props.idx} isChecked={props.isChecked} setIsCheckedList={props.setIsCheckedList}/>
                </div>
            </div>
            <div className="cover">
            {
                !!(estimate[props.idx].Detail) ? <>
                <div className="bd-s bdw-3 pb-3 m-2 br-100 flex list__item">
                    <div className="pt-1 list__item flex justify-center align-center pt-5">
                        <img src={`${estimate[props.idx].Detail.imgSrc}`} width="64vw" height="auto"/>
                    </div>
                    <div className="asd pt-3 notoBold fs-26 ellipsis relative mt-2 w-60p">{estimate[props.idx].Detail.title}</div>
                    <div>
                        <div className="pt-3 mt-1">
                            {/**삭제 버튼 */}
                            <button className="custombtn" onClick={estimateDeletePartsHandler}>
                                <img src={del} width="32px" height="32px"/>
                            </button>
                </div>
                </div>
                <hr className="hrs"/>
                <div className="fs-22 notoBold cash">
                    <div className="fs-28 black">가격</div>
                    <div className="flex">
                    <div className="fs-32 red flex p-1">{estimate[props.idx].Detail.price}</div>
                    <div className="flex justify-center align-center pl-1">원</div>
                    </div>
                </div>
            </div>
            </> : <></>
            }
            </div>
        </div>
    )
}

export default ItemCard;