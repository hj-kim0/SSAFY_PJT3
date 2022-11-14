import Tab from "../components/icon/Tab";
import DropdownCart from "../components/item/DropDownCart";
import ItemCard from "../components/item/ItemCard";
import "./AutoManual.scss";
const itemdata = {
    url : "../assets/images/sample.png",
    idx : 1127,
    name : "i7 Intel Core(R)"
}

const data = [
    {
        id : 0,
        label: "PC1",
        parts : [
            {
                id: 0,
                part : [
                    {id: 1674},
                ],
                name : "CPU"
            },
            {
                id: 1,
                part : [
                    {id: 2223},
                ],
                name : "메인보드"
            },
        ],
    },
    {
        id : 1,
        label: "PC2",
        parts : [
            {
                id: 0,
                part : [
                    {id: 1000},
                    {id: 1111},
                ],
                name : "CPU"
            },
            {
                id: 1,
                part : [
                    {id: 2000},
                    {id: 2009},
                ],
                name : "메인보드"
            },
        ],
    },   
];

const datas = [
    {   "mainboard":"16301447",
        "mainboardDetail":{
        "price":"100,000",
        "partsID":"16301447",
        "optional":null,
        "specsID":"인텔(소켓1700)",
        "id":"63685a30ba5fe44b7c963ea7",
        "title":"BIOSTAR H610MH D4 이엠텍"
        },
        "memory":"10294017",
        "memoryDetail":{
        "price":"28,940",
        "partsID":"10294017",
        "optional":null,
        "specsID":"DDR4",
        "id":"636864e60fc1cf8b4e384a14",
        "title":"마이크론 Crucial DDR4-3200 CL22 (8GB)"
        },
        "use":"normal",
        "cpu":"16101083",
        "gpuDetail":null,
        "gpu":"false",
        "cooler":"false",
        "powerDetail":{
        "formfactor":"ATX 파워",
        "price":"56,500",
        "partsID":"14677133",
        "id":"636869df6cda39e85f8c5a12",
        "power":"500W",
        "title":"마이크로닉스 Classic II 풀체인지 500W 80PLUS BRONZE 230V EU"
        },
        "id":"6369ba0b2c1ba3c6c2e8c959",
        "power":"14677133",
        "cpuDetail":{
        "price":"216,050",
        "partsID":"16101083",
        "specsID":"Intel Core i3-12100",
        "id":"6369ae6f25392103fe86eb52",
        "title":"인텔 코어i3-12세대 12100 (엘더레이크) (정품)",
        "imgSrc":"//img.danawa.com/prod_img/500000/083/101/img/16101083_1.jpg?shrink=140:140",
        "option":{
        "cooler":false,
        "genuine":"genuine"
        }
        },
        
        }
]

const AutoManual = () => {
    return(
        <div className="relative mt-5 pt-5 mb-5">
            <div className="mt-5 ">
            </div>
            <div className="mt-5 pt-5 flex wrapper">
            <div className="w-50">
                <Tab/>
            </div>
            <div className="w-50 row ml-5 mr-5"> 
                {
                datas.map(
                    item => <>
                    
                    <ItemCard data={item.cpuDetail} kind="CPU"/>
                    <ItemCard data={item.mainboardDetail} kind="메인보드"/>
                    <ItemCard data={item.gpuDetail} kind="GPU"/>
                    <ItemCard data={item.memoryDetail} kind="메모리"/>
                    <ItemCard data={item.coolerDetail} kind="쿨러"/>
                    <ItemCard data={item.powerDetail} kind="파워"/>
                    </>
                    
                )
                }
            </div>
        </div>
        </div>
        );
}

export default AutoManual;