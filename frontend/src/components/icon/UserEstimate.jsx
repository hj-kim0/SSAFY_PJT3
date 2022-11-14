import ChkButtonStruct from "../item/ChkButtonStruct";
import "./UserEstimate.scss";

const list = [
    {
        id:0,
        text : "배그"
    },
    {
        id:1,
        text : "로아"
    },
    {   
        id:2,
        text : "롤"
    },
    {
        id:3,
        text : "사무용"
    },
    {
        id:4,
        text : "작업용"
    },
    {
        id:5,
        text : "범용"
    },
    
];

const UserEstimate = (props) => {
    return (
        <>
        <div className="flex align-center column pt-5 mb-5">
            <div className="flex align-center pb-3 notoBold fs-22">
            예산
        </div>
        <div className="flex align-center pb-3">
            <input className="moneyinput"
            type='text'
            value={props.enteredNum}
            onChange={props.changeEnteredNum}
        />
        </div>
        <div className="flex align-center pb-3 notoBold fs-22">
            사용용도
        </div>
        <div className="flex align-center wkbox mb-5 pb-5">
        {
            list.map((items) => (
                <ChkButtonStruct text={items.text} key={items.id}/>
            ))
        }
        </div>
        <div className="flex align-center mt-5 pt-5 pb-3">
            <button className="button1"><a className="notoBold fs-24 btnstyle">자동 추천</a></button>
        </div>
        </div>
        </>
    );
}

export default UserEstimate;