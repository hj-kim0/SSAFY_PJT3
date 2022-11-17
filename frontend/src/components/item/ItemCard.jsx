
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
    

    const setChecked = () => {
        let list = {...props.isChecked};
        list[props.idx] = !list[props.idx];
        props.setIsCheckedList(list);
    }

    const ToggleChangeHandler = () => {
        const toggleChg = { ...recommend };
        switch(targetname){
            case `cpu` :
                toggleChg.cpu = (!toggleChg.cpu);
                setIsChecked(!isChecked);
                setRecommend(toggleChg);
                setChecked();
                break;
            case `gpu` :
                toggleChg.gpu = (!toggleChg.gpu);
                setIsChecked(!isChecked);
                setRecommend(toggleChg);
                setChecked();
                break;
            case `mainboard` :
                toggleChg.mainboard = (!toggleChg.mainboard);
                setIsChecked(!isChecked);
                setRecommend(toggleChg);
                setChecked();
                break;
            case `memory` :
                toggleChg.memory = (!toggleChg.memory);
                setIsChecked(!isChecked);
                setRecommend(toggleChg);
                setChecked();
                break;
            case `cooler` :
                toggleChg.cooler = (!toggleChg.cooler);
                setIsChecked(!isChecked);
                setRecommend(toggleChg);
                setChecked();
                break;
            
            case `ssd` :
                toggleChg.ssd = (!toggleChg.ssd);
                setIsChecked(!isChecked);
                setRecommend(toggleChg);
                setChecked();
                break;
            case `power` :
                toggleChg.power = (!toggleChg.power);
                setIsChecked(!isChecked);
                setRecommend(toggleChg);
                setChecked();
                break;
            case `tower` :
                toggleChg.tower = (!toggleChg.tower);
                setIsChecked(!isChecked);
                setRecommend(toggleChg);
                setChecked();
                break;
            default:
                break;
        }
    }

    return(
        <div className="flex align-center button_pos">
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
    //자동 추천 response 받는 데이터
    const [estimate, setEstimate] = useRecoilState(estimateState);
    // console.log(estimate);
    // console.log(props);


    const [open, setOpen] = useState(true);

    const onChangeOpenHandler = (idx) => {
        const target = document.getElementById(`detail${idx}`).open;
        setOpen(target);
    } 

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

    // console.log(props.isChecked[`${props.idx}`]);
    // console.log(props.isChecked[`${props.idx}`])
    return (
        <div className="p-1 br-100 status">
            <details id={`detail${props.idx}`} className="details br-100 flex top__cover status" open >
                <summary>
                <div className="notoBold fs-18 flex justify-space-between list__top"
                onClick={()=>{
                onChangeOpenHandler(props.idx);
                }}>
                <div className="flex align-center ml-10p">
                    <div className={`fs-30 ${!props.isChecked[`${props.idx}`] && "visible"}`}>&#128274;</div>
                    {namedata[props.idx].name}
                </div> 
                <div className="flex">
                    <ToggleSwitch idx={props.idx} isChecked={props.isChecked} 
                    setIsCheckedList={props.setIsCheckedList}/>
                    <div className="flex align-center">
                        <b className={`icon ${ open && "open"}`}> ➜ </b></div>
                    </div>
                </div>
                </summary>
                <div className="cover">
            {
                !!(estimate[props.idx].Detail) ? <>
                <div className="bd-s bdw-3 br-100 flex list__item">
                    <div className="pt-2 list__item flex justify-center align-center">
                        <img src={`${estimate[props.idx].Detail.imgSrc}`} width="64vw" height="auto"/>
                    </div>
                    <div className="asd notoBold fs-18 ellipsis relative mt-1 w-60p">{estimate[props.idx].Detail.title}</div>
                    <div>
                        <div className="mt-1">
                            {/**삭제 버튼 */}
                            <button className="custombtn" onClick={estimateDeletePartsHandler}>
                                <img src={del} width="32px" height="32px"/>
                            </button>
                </div>
                </div>
                <hr className="hrs"/>
                <div className="fs-18 notoBold cash">
                    <div className="fs-20 black">가격</div>
                    <div className="flex">
                    <div className="fs-24 red flex p-1">{estimate[props.idx].Detail.price}</div>
                    <div className="flex justify-center align-center pl-1">원</div>
                    </div>
                </div>
            </div>
            </> : <></>
            }
            </div>
            </details>
        </div>
    )
}

export default ItemCard;