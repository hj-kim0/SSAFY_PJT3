import ChkButtonStruct from "../item/ChkButtonStruct";
import "./UserEstimate.scss";
import { fetchRecommendEstimate } from "../../apis/recomAPI";
import { useRecoilState } from "recoil";
import { purposeState, recommendState, estimateState, cartState } from "../../recoil/atom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';




const UserEstimate = () => {

    const [ recommend, setRecommend ] = useRecoilState(recommendState);

    // console.log(recommend);
    
    const [ estimate, setEstimate ] = useRecoilState(estimateState);
    
    // console.log(estimate);

    const [ purpose, setPurpose ] = useRecoilState(purposeState);

    const [ select, setSelect ] = useRecoilState(cartState);

    const MySwal = withReactContent(Swal);
    // console.log(purpose[select].target);

    const RecommendEstimateHandler = () => {
        recommend.purpose_program == "" ? 
        // 여기에 얼러트창
    MySwal.fire({
        title: <strong>❗ 경고</strong>,
        html: <i>용도를 선택해야 합니다.</i>,
        icon: 'fail'
        })
        : 
        (
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
        );


    }
    
    const setRecommendBudget = (e) => {
        let recom = {...recommend};
        const etv = e.target.value*1;
        recom.budget = etv;
        setRecommend(recom);
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
        <hr className="hrs"/>
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