import Tab from "../components/icon/Tab";
import ItemCard from "../components/item/ItemCard";
import "./AutoManual.scss";
import { useRecoilState } from "recoil";
import { nameState, recommendState, estimateState, simpleEstimateState } from "../recoil/atom";
import { fetchSaveEstimate } from "../apis/recomAPI";
import Comma from "../utils/Comma";
import { useState } from "react";


const AutoManual = (props) => {
    //로컬 데이터 초기값.
    const names = useRecoilState(nameState);
    //자동 추천 response 받는 데이터
    const [estimate, setEstimate] = useRecoilState(estimateState);
    // console.log(estimate);

    const [isCheckedList, setIsCheckedList] = useState([true,true,true,true,true,true,true,true,]);

    const [simpleEstimate, setSimpleEstimate] = useRecoilState(simpleEstimateState);

    const state = props.data.currentUser;
    let sum = 0;
    
    
    const SaveEstimateHandler = () => {
        const estimateName = document.getElementById("pcName").value;
        const parts = {...estimate};
        // console.log(state.information.email);
        console.log(estimateName);
        console.log(parts);
        
        let lst = [];

        parts.map((item) => {
            lst.push(item.Detail.partsID);
        })

        let temp =
        {
            userID : state.information.email, 
            parts : lst,
            estimateName : estimateName
        };

        fetchSaveEstimate(temp)
    }


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

    const commaSum = Comma(sum);

    return(
        <div className="relative mt-5 pt-5 mb-5 structwrapper">
            <div className="wrapper inline">
            <div className="contents flex">
                <Tab/>
            </div>
            <div className="row contents"> 
                <div className="p-3">
                    {
                        !!state ? 
                        <div className="flex justify-center">
                            <input id="pcName" type="text" className="pl-2 pr-2 namebox" defaultValue="내 PC" />
                            <button className="decon pl-2 pr-2" onClick={SaveEstimateHandler}><b className="fs-32">&#128190;</b></button>
                        </div> 
                    : <></>       
                    }
                </div>
                <div className="cost_struct">
                    {cardlist}
                <hr className="hrs"/>
                <div>
                <div className="fs-22 notoBold cash">
                    <div className="fs-28 black">총 </div>
                    <div className="flex">
                    <div className="fs-32 red flex p-1 left">{commaSum}</div>
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