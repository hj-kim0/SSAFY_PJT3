import Tab from "../components/icon/Tab";
import ItemCard from "../components/item/ItemCard";
import "./AutoManual.scss";
import { useRecoilState } from "recoil";
import { nameState, recommendState, estimateState } from "../recoil/atom";



const AutoManual = () => {
    //로컬 데이터 초기값.
    const names = useRecoilState(nameState);
    // const namedata = names[0].names;
    
    //자동 추천 request 요청시 보내는 데이터
    const [recommend, setRecommend] = useRecoilState(recommendState);
    // console.log(recommend);

    //자동 추천 response 받는 데이터
    const [estimate, setEstimate] = useRecoilState(estimateState);
    // console.log(estimate);

    const cardlist = estimate.map((items) => ( !!items.Detail ? 
        (
        <ItemCard 
            data={items.Detail} 
            key={items.idx}
            idx={items.idx}
        />
        )
        :
        (<ItemCard 
            data={null} 
            key={items.idx}
            idx={items.idx}
        />)
        ) 
    );

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