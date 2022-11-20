import React, { useEffect, useState } from "react";
import DropdownCart from "../components/item/DropDownCart";
import MyResponsiveRadar from "../components/item/Rader";
import { fetchEstimateList } from "../apis/recomAPI";

import { complexEstimateState } from "../recoil/atom";
import "./Compare.scss";
import { useRecoilState } from "recoil";


const Compare = (props) => {
    
    const [mylist, setMylist] = useRecoilState(complexEstimateState);
    const [comparelist, setComparelist] = useRecoilState(complexEstimateState);

    const [mylistidx, setMylistidx]= useState(null);
    const [comparelistidx, setComparelistidx] = useState(null);



    console.log(props);
    console.log(props.data);
    console.log(props.data.currentUser);
    
    const state = props.data.currentUser;

    const data = {
        userID : state.information.email
    }
    
    useEffect(() => {
    fetchEstimateList(data)
    .then((res) => {
        res.json().then((res) => {
            console.log(res);
            if(res!=null){
                setMylist(res);
                setComparelist(res);
            }
        })
    })
    },[])    
    
    return(
        <div>
            <div className="kyobo fs-40 flex align-center mt-5 pt-5">
            <div className="">
            <div className="bdb-s bdc-grey bdw-7 pb-3   big">컴퓨터 사양 비교</div></div>            </div>
            <div className="m-2 p-5 flex mb-5  wrapper pb-3">
                <div className="small">
                <div className="kyobo fs-40 bdb-s bdc-grey bdw-7 pb-3">컴퓨터 사양 비교</div>
                </div>
                <div className="inline">
                <div className="flex mt-5 pt-5 w-50p">
                    <DropdownCart data={mylist} legend="내 사양" setidx={setMylistidx}/>
                </div>
                <div className="flex mt-5 pt-5 w-50p">
                    <DropdownCart data={comparelist} legend="내 견적" setidx={setComparelistidx} />
                </div>
                </div>
                <div className="small">
                {!!mylistidx ? 
                (!!comparelistidx ?
                    <MyResponsiveRadar mylistidx={mylistidx} comparelistidx={comparelistidx} mylist={mylist}/>
                    : <></>
                    ) :<></>
                }
                
                </div>
            </div>
            <div className="mt-5 pt-5 pb-3  big">
            {!!mylistidx ? 
                (!!comparelistidx ?
                    <MyResponsiveRadar mylistidx={mylistidx} comparelistidx={comparelistidx} mylist={mylist}/>
                    : <></>
                    ) :<></>
                }
            </div>
        </div>
        )
}

export default Compare;