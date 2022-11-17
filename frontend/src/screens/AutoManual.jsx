import Tab from "../components/icon/Tab";
import ItemCard from "../components/item/ItemCard";
import "./AutoManual.scss";
import { useRecoilState } from "recoil";
import { nameState, recommendState, estimateState } from "../recoil/atom";

import { useState } from "react";


const AutoManual = () => {
    //로컬 데이터 초기값.
    const names = useRecoilState(nameState);
    //자동 추천 response 받는 데이터
    const [estimate, setEstimate] = useRecoilState(estimateState);
    // console.log(estimate);

    const [isCheckedList, setIsCheckedList] = useState([true,true,true,true,true,true,true,true,]);

    let sum = 0;
    
    estimate.map((items) => (!!items.Detail ? sum += items.Detail.price*1 : sum += 0));

    const cardlist = estimate.map((items) => ( !!items.Detail ? 
        (
        <ItemCard 
            data={items.Detail} 
            key={items.idx}
            idx={items.idx}
            isChecked={isCheckedList}
            setIsCheckedList={setIsCheckedList}
        />
        )
        :
        (<ItemCard 
            data={null} 
            key={items.idx}
            idx={items.idx}
            isChecked={isCheckedList}
            setIsCheckedList={setIsCheckedList}
        />)
        ) 
    );

    return(
        <div className="relative mt-5 pt-5 mb-5 structwrapper">
            <div className="flex wrapper">
            <div className="contents">
                <Tab/>
            </div>
            <div className="row contents"> 
                <div className="cost_struct">
                    {cardlist}
                <hr className="hrs"/>
                <div>
                <div className="fs-22 notoBold cash">
                    <div className="fs-28 black">총 </div>
                    <div className="flex">
                    <div className="fs-32 red flex p-1 left">{sum}</div>
                    <div className="flex justify-center align-center pl-1">원</div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        );
}

export default AutoManual;