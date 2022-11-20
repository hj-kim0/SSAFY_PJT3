import "./ManualEstimate.scss";
import { useRecoilState } from "recoil";
import { nameState, limitsState, partsState, selectState, estimateState, simpleEstimateState } from "../../recoil/atom";
import { useEffect, useState } from "react";
import PageCount from "../effect/PageCount";
import { fetchSearchByEstimate } from "../../apis/recomAPI";
import Comma from "../../utils/Comma";

const Combo = (props) => {
    return(
    <div className="select m-2">
        <select className="sel" onChange={props.onChangeHandler} defaultValue={props.selected}>
            {
                props.data.names.map(item => (
                    <option 
                    value={item.idx} 
                    key={item.idx}
                    >{item.name}
                    </option>
                ))
            }
        </select>
    </div>
    )
};

const Item = (props) => {
    return (
        <div className="flex row">
            {
                props.data.slice(props.offset, props.offset + props.limit)
                .map((item, idx) => {
                    console.log(item);
                    const commaNum = Comma(item.price);
                    return (
                        <div key={idx}>
                            <div className="flex wrapper row">
                                <div className="flex card-struct">
                                    <div className="w-30p flex align-center">
                                        <img src={item.imgSrc} width="auto" height="auto"/>
                                    </div>
                                    <div className="w-70p flex row align-center justify-center">
                                        <div className="notoBold m-4 fs-24 ellipsis"> {item.title}</div>
                                        <div className="notoBold m-4 fs-18 flex justify-end"> {commaNum} 원</div>
                                        <div className="flex justify-end">
                                            <button className="cartbutton" onClick={() => {props.insertPartsHandler(item)}}><b className="fs-18">담기</b></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

const ManualEstimate = () => {
    const [names, setNames] = useRecoilState(nameState);
    const [limits, setLimits] = useRecoilState(limitsState);
    const [parts, setParts] = useRecoilState(partsState);
    const [selected, setSelected] = useRecoilState(selectState);
    const [estimate, setEstimate] = useRecoilState(estimateState);
    const [simpleEstimate, setSimpleEstimate] = useRecoilState(simpleEstimateState);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const [filteredParts, setFilteredParts] = useState([]);

    const onChangePartsHandler = (e) => {
        setSelected({state : e.target.value});
        onFetchSearchByEstimateHandler(e.target.value);
    }

    const onChangeLimitsHandler = (e) => {
        setLimit(e.target.value);
    }

    
    const insertPartsHandler = (data) => {
        let temp = [];
        estimate.map((item) => {
            item.idx == selected.state
            ? temp.push({ idx : item.idx , Detail: data}) 
            : temp.push({ idx : item.idx , Detail: item.Detail})
        })
        setEstimate(temp);
    }

    const onFetchSearchByEstimateHandler = (idx) => {
        fetchSearchByEstimate( names.names[idx].data , simpleEstimate[0])
        .then((res) => {
            res.json().then((res) => {
                console.log(res);
                if(res!=null){
                    setParts(res);
                    setFilteredParts(res);
                }
            })
        })

    }

    const searchByName = () => {
        const target = document.getElementById("partsName");
        const temp = [];
        parts.map((item) => {
            item.title.includes(target.value) ? temp.push(item) : <></>;
        })
        setFilteredParts(temp);
    }


    useEffect(() => {
        console.log("첫 실행");
        onFetchSearchByEstimateHandler(0);
        console.log("디폴트 검색리스트 불러오기 완료");
    },[])

    return (
    <div className="m-5">
        <div className="notoBold fs-32">
            {names.names[selected.state].name}
        </div>
        <div className="flex justify-end">
            <div className="p-3 inline">
                <div className="flex align-center justify-center">
                    <Combo data={names} key={selected.state} onChangeHandler={onChangePartsHandler} selected={selected.state}/>
                </div>
                <div className="search">
                    <input id="partsName" type="text" className="searchTerm" placeholder="부품명을 입력해주세요."/>
                    <button type="submit" className="searchButton" onClick={searchByName}>
                        &rarr;
                    </button>
                </div>
            </div>
        </div>
        <div className="data-wrapper">
            <div className="flex justify-end">
                <Combo data={limits} key={limit} onChangeHandler={onChangeLimitsHandler} selected={limit}/>
            </div>
        </div>
        <div className="content-list-wrapper">
            <div className="p-3">
                <Item
                data={filteredParts}
                offset={offset}
                limit={limit}
                page={page}
                setLimit={setLimit}
                insertPartsHandler={insertPartsHandler}
                />
            </div>
        </div>
        <div className="flex align-center justify-center">
            <PageCount total={filteredParts.length} limit={limit} page={page} setPage={setPage}/>
        </div>
    </div>
    );
}


export default ManualEstimate;
