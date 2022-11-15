import { useEffect, useState } from "react";
import { fetchRecommendEstimate } from "../apis/recomAPI";
import Tab from "../components/icon/Tab";
import ItemCard from "../components/item/ItemCard";
import "./AutoManual.scss";

const AutoManual = () => {
    // const list = [
    //     {
    //         name: "CPU",
    //         data: "cpu"
    //     },
    //     {
    //         name: "메인보드",
    //         data: "mainboard"
    //     },
    //     {
    //         name: "GPU",
    //         data: "gpu"
    //     },
    //     {
    //         name: "메모리",
    //         data: "memory"
    //     },
    //     {
    //         name: "쿨러",
    //         data: "cooler"
    //     },
    //     {
    //         name: "파워",
    //         data: "power"
    //     },
    //     {
    //         name: "케이스",
    //         data: "tower"
    //     },
    //     {
    //         name: "SSD",
    //         data: "ssd"
    //     },
    // ]
    // //로컬 데이터 초기값.
    // const data = [
    //     {
    //         "idx": 0,
    //         "Detail": null
    //     },
    //     {
    //         "idx": 1,
    //         "Detail": null
    //     },
    //     {
    //         "idx": 2,
    //         "Detail": null
    //     },
    //     {
    //         "idx": 3,
    //         "Detail": null
    //     },
    //     {
    //         "idx": 4,
    //         "Detail": null
    //     },
    //     {
    //         "idx": 5,
    //         "Detail": null
    //     },
    //     {
    //         "idx": 6,
    //         "Detail": null
    //     },
    //     {
    //         "idx": 7,
    //         "Detail": null
    //     }
    // ];
    // const [estimate, setEstimate] = useState(data);

    // const cardlist = estimate.map((items) => ( !!items.Detail ? 
    //     (
    //     <ItemCard 
    //         data={items.Detail} 
    //         name={list[items.idx].name}
    //         key={items.idx}
    //     />
    //     )
    //     :
    //     (<ItemCard 
    //         data={null} 
    //         name={list[items.idx].name}
    //         key={items.idx}
    //     />)
    //     ) 
    // );


    // let payload = {
    //     budget : 0,
    //     purpose_program : "",
    //     cpu : false,
    //     gpu : false,
    //     mainboard : false,
    //     memory : false,
    //     SSD : false,
    //     HDD : false,
    //     power : false
    // }


    // const handleRecommendEstimate = (
    //     budget, program, cpu, gpu, mainboard, memory, ssd, hdd, power
    // ) => {  
    //     payload.budget = budget;
    //     payload.cpu = program;
    //     payload.cpu = cpu;
    //     payload.gpu = gpu;
    //     payload.mainboard = mainboard;
    //     payload.memory = memory;
    //     payload.SSD = ssd;
    //     payload.HDD = hdd;
    //     payload.power = power;

    //     fetchRecommendEstimate(payload)
    //     .then((res) => {
    //         res.json().then((res) => {
    //             console.log(res);
    //             setEstimate(res);
    //         })
    //     })
    // }

    return(
        <div className="relative mt-5 pt-5 mb-5">
            <div className="mt-5 ">
            </div>
            <div className="mt-5 pt-5 flex wrapper">
            <div className="w-50">
                {/* <Tab handleRecommendEstimate={handleRecommendEstimate}/> */}
            </div>
            <div className="w-50 row ml-5 mr-5"> 
                <div className="mt-4 bd-s bdw-1 m-2">
                    {/* {cardlist} */}
                </div>
            </div>
        </div>
        </div>
        );
}

export default AutoManual;