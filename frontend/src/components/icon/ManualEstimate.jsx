import "./ManualEstimate.scss";
import { useState } from "react";
import PageCount from "../effect/PageCount";


const Combo = (props) => {
    const data = props.data;
    const type = props.type;

    let onChangeHandler;
    
    switch(type) {
        case "1" : onChangeHandler = props.onChangePartsHandler;
            break;
        case "2" : onChangeHandler = props.onChangeDetail1Handler;
            break;
        case "3" : onChangeHandler = props.onChangeHierarchyHandler;
            break;
        case "4" : onChangeHandler = props.onChangeLimitsHandler;
            break;
        default:
            break;
    }


    return(
    <div className="select m-2">
        <select className="sel" onChange={onChangeHandler}>
            {
                data.map(item => (
                    <option value={item.id} key={item.id}>{item.name}</option>
                ))
            }
        </select>
    </div>
    );
}

const Item = (props) => {
    return (
        <div className="flex wrapper">
            <div className = "flex column card-struct">
                <div className="flex">
                    <img src={props.image}/>
                    <div className="flex column">
                        <div> 이름 :  {props.name} </div>
                        <div> 설명 : {props.description} </div>
                        <div> 가격 : {props.price} 원 </div>
                    </div>
                    <div className="flex justify-center">
                    <div className="flex">
                        <button className="setbtn">담기</button>
                    </div>
                    </div>
                </div> 
            </div>
            
        </div>
    );
}

const ItemList = (props) => {
    const data = props.data;
    const offset = props.offset;
    const limit = props.limit;

    return(
        <>
        {
        data.slice(offset, offset + limit)
        .map((item, idx) => {
            return(
                <div key={idx}>
                    <Item id={item.id} price={item.price} name={item.name} image={item.image} description={item.description}/>
                </div>
            )
        })
    }
        </>
    )
}

const ManualEstimate = () => {
    const partsSet = [
        {
            id : 0,
            name : "CPU"
        },
        {
            id : 1,
            name : "GPU"
        },
        {
            id : 2,
            name : "메인보드"
        },
        {
            id : 3,
            name : "램"
        },
        {
            id : 4,
            name : "파워"
        },
        {
            id : 5,
            name : "케이스"
        },
        {
            id : 6,
            name : "SSD"
        },
        {
            id : 7,
            name : "HDD"
        },
        {
            id : 8,
            name : "쿨러"
        },
    ];

    const itemData = [
        { 
            id: 1, 
            name: "i5", 
            price: 51,
            image: "https://via.placeholder.com/200x150",
            description: "Description for product item number 1",
        },
        { 
            id: 2, 
            name: "i3", 
            price: 71,
            image: "https://via.placeholder.com/200x150",
            description: "Description for product item number 2",
        },
        { 
            id: 3, 
            name: "i7", 
            price: 81,
            image: "https://via.placeholder.com/200x150",
            description: "Description for product item number 3",
        },
        { 
            id: 4, 
            name: "i9", 
            price: 110,
            image: "https://via.placeholder.com/200x150",
            description: "Description for product item number 4",
        },
        
    ];

    const hierarchy = [
        {
            id:0,
            name: "최신순"
        },
        {
            id:1,
            name: "인기순"
        },
        {
            id:2,
            name: "가격순"
        },
    ];

    const limitData = [
        {
            id:10,
            name:"10개씩보기",
            value:10,
        },
        {
            id:20,
            name:"20개씩보기",
            value:20,
        },
        {
            id:30,
            name:"30개씩보기",
            value:30,
        },
        {
            id:40,
            name:"40개씩보기",
            value:40,
        },
        
    ];

    //type1
    const [selected, setSelected] = useState(0);
    
    //type2
    const [detail1, setDetail1] = useState(0);

    //type3
    const [hier, setHier] = useState(0);
    
    //type4
    const [limit, setLimit] = useState(10);
    
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    
    console.log(
        "t1 : " + selected 
    );
    console.log(
        "t2 : " + detail1 
    );
    console.log(
        "t3 : " + hier 
    );
    console.log(
        "t4 : " + limit 
    );
    



    //부품 별 검색 처리 CPU... etc
    const onChangePartsHandler = (e) => {
        setSelected(e.target.value);
    }

    const onChangeDetail1Handler = (e) => {
        setDetail1(e.target.value);
    }

    const onChangeHierarchyHandler = (e) => {
        setHier(e.target.value);
    }

    const onChangeLimitsHandler = (e) => {
        setLimit(e.target.value);
    }


    
    return (
    <div className="mb-5">
        <div className="NotoBold fs-32">
            {partsSet[selected].name}
        </div>
        <div className="flex align-center justify-center">
        <div className="">
            <Combo data={partsSet} type="1" onChangePartsHandler={onChangePartsHandler}/>
        </div>
        <div className="">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="검색"/>
                <button type="submit" className="searchButton">
                    &rarr;
                </button>
            </div>
        </div>
        </div>
        <div className="flex p-3">
            <Combo data={partsSet} type="2" onChangePartsHandler={onChangeDetail1Handler}/>
            <Combo data={partsSet} type="2" onChangePartsHandler={onChangeDetail1Handler}/>
            <Combo data={partsSet} type="2" onChangePartsHandler={onChangeDetail1Handler}/>
            <Combo data={partsSet} type="2" onChangePartsHandler={onChangeDetail1Handler}/>
        </div>
        <div className="data-wrapper">
            <div className="flex justify-end">
                <Combo data={hierarchy} type="3" onChangeHierarchyHandler={onChangeHierarchyHandler}/>
                <Combo data={limitData} type="4" onChangeLimitsHandler={onChangeLimitsHandler}/>
            </div>
            <div className="content-list-wrapper">
                <div className="">
                    <ItemList 
                    data={itemData}
                    offset={offset}
                    limit={limit}
                    page={page}
                    setLimit={setLimit}
                    />
                </div>
            </div>
            <div className="flex center">
                <PageCount
                total={itemData.length}
                limit={limit}
                page={page}
                setPage={setPage}
                />
            </div>
        </div>
    </div>
    );
}

export default ManualEstimate;