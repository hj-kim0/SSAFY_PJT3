import ChkButtonStruct from "../item/ChkButtonStruct";
import "./UserEstimate.scss";
import { fetchRecommendEstimate } from "../../apis/recomAPI";
import { useRecoilState } from "recoil";
import { purposeState, recommendState, estimateState, selectState } from "../../recoil/atom";



const UserEstimate = () => {

    const [ recommend, setRecommend ] = useRecoilState(recommendState);

    // console.log(recommend);
    
    const [ estimate, setEstimate ] = useRecoilState(estimateState);
    
    // console.log(estimate);

    const [ purpose, setPurpose ] = useRecoilState(purposeState);

    const [ select, setSelect ] = useRecoilState(selectState);

    // console.log(purpose[select].target);

    const RecommendEstimateHandler = () => {
        fetchRecommendEstimate(
            recommend
        ).then((res) => {
            res.json().then((res) => {
                console.log(res);
                if(res!=null){
                    setEstimate(res);
                }
            })
        })
    }
    
    const setRecommendBudget = (e) => {
        let recom = {...recommend};
        const etv = e.target.value*1;
        recom.budget = etv;
        setRecommend(recom);
        
        console.log(e.target.value);
        console.log(recommend);
    }
    

    return (
        <>
        <div className="flex align-center column pt-5 mb-5">
            <div className="flex align-center pb-3 notoBold fs-22">
            예산
        </div>
        <div className="flex align-center pb-3 budget">
            <input className="moneyinput"
            type='number'
            onChange={setRecommendBudget}
            />
        </div>
        <div className="flex align-center pb-3 notoBold fs-22">
            사용용도
        </div>
        <div className="flex align-center wkbox mb-5 pb-5">
        {
            purpose.map((items) => (
                <ChkButtonStruct 
                text={items.text} 
                key={items.id} 
                idx={items.id} 
                />
            ))
        }
        </div>
        <div className="flex align-center mt-5 pt-5 pb-3">
            <button className="button1" onClick={RecommendEstimateHandler}>
                <a className="notoBold fs-24 btnstyle">자동 추천</a>
            </button>
        </div>
        </div>
        </>
    );
}

export default UserEstimate;