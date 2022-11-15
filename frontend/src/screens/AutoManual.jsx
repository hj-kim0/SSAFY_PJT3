import { useState } from "react";
import Tab from "../components/icon/Tab";
import ItemCard from "../components/item/ItemCard";
import "./AutoManual.scss";

const AutoManual = () => {

// 부품 명칭 집합
    const list = [
    {
        name: "CPU",
        data: "cpu"
    },
    {
        name: "메인보드",
        data: "mainboard"
    },
    {
        name: "GPU",
        data: "gpu"
    },
    {
        name: "메모리",
        data: "memory"
    },
    {
        name: "쿨러",
        data: "cooler"
    },
    {
        name: "파워",
        data: "power"
    },
    {
        name: "케이스",
        data: "tower"
    },
    {
        name: "SSD",
        data: "ssd"
    },
    
    ]

//백엔드에서 준 데이터

const data = [
    {
        idx:0,
        Detail:{
            price: "216050",
            partsID:"16101083",
            specsID:"Intel Core i3-12100",
            id: "6369ae6f25392103fe86eb52",
            title: "인텔 코어i3-12세대 12100 (엘더레이크) (정품)",
            imgSrc: "//img.danawa.com/prod_img/500000/083/101/img/16101083_1.jpg?shrink=140:140",
            option: {
                cooler:false,
                genuine:"genuine"
                }
            },

    },
    {
        idx:1,
        Detail:{
            price: "216050",
            partsID:"16101083",
            specsID:"Intel Core i3-12100",
            id: "6369ae6f25392103fe86eb52",
            title: "인텔 코어i3-12세대 12100 (엘더레이크) (정품)",
            imgSrc: "//img.danawa.com/prod_img/500000/083/101/img/16101083_1.jpg?shrink=140:140",
            option: {
                cooler:false,
                genuine:"genuine"
            }
        },
    },
];

//로컬 데이터

const [estimate, setEstimate] = useState(data);
    
    const cardlist = estimate.map((items) => ( !!items.Detail ? 
        (
        <ItemCard 
            data={items.Detail} 
            name={list[items.idx].name}
            key={items.idx}
        />
        )
        :
        (<ItemCard 
            data={null} 
            name={list[items.idx].name}
            key={items.idx}
        />)
        ));

    return(
        <div className="relative mt-5 pt-5 mb-5">
            <div className="mt-5 ">
            </div>
            <div className="mt-5 pt-5 flex wrapper">
            <div className="w-50">
                <Tab/>
            </div>
            <div className="w-50 row ml-5 mr-5"> 
                <div className="mt-4 bd-s bdw-1 m-2">
                    {cardlist}
                </div>
            </div>
        </div>
        </div>
        );
}

export default AutoManual;