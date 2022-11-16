import { useState } from "react";
import "./ToggleSwitch.scss";
import { nameState, recommendState } from "../../recoil/atom";
import { useRecoilState } from "recoil";

const ToggleSwitch = (props) => {

    const [state, setState] = useState(props.recom);

    const [names, setNames] = useRecoilState(nameState);
    const [recommend, setRecommend] = useRecoilState(recommendState);

    const targetname = names.names[props.idx].data;

    const ToggleChangeHandler = () => {
        const toggleChg = { ...recommend };
        console.log(targetname);
        console.log(toggleChg);
        switch(targetname){
            case `cpu` :
                toggleChg.cpu = (!toggleChg.cpu);
                console.log(toggleChg);
                setRecommend(toggleChg);
                break;
            case `gpu` :
                toggleChg.gpu = (!toggleChg.gpu);
                console.log(toggleChg);
                setRecommend(toggleChg);
                break;
            case `mainboard` :
                toggleChg.mainboard = (!toggleChg.mainboard);
                console.log(toggleChg);
                setRecommend(toggleChg);
                break;
            case `memory` :
                toggleChg.memory = (!toggleChg.memory);
                console.log(toggleChg);
                setRecommend(toggleChg);
                break;
            case `cooler` :
                toggleChg.cooler = (!toggleChg.cooler);
                console.log(toggleChg);
                setRecommend(toggleChg);
                break;
            
            case `ssd` :
                toggleChg.ssd = (!toggleChg.ssd);
                console.log(toggleChg);
                setRecommend(toggleChg);
                break;
            case `power` :
                toggleChg.power = (!toggleChg.power);
                console.log(toggleChg);
                setRecommend(toggleChg);
                break;
            case `tower` :
                toggleChg.tower = (!toggleChg.tower);
                console.log(toggleChg);
                setRecommend(toggleChg);
                break;
            default:
                break;
        }
    }

    return(
        <button onClick={ToggleChangeHandler}>버튼</button>
    )
//     function handleToggle(){
//         setState(!state);
//         const ta = name[props.idx];
        
//     }
    

//     const Switch = (props) => {
//         let classNames = ["component-wrapper", () ? "component-wrapper-is-on" : "component-wrapper-is-on"].join(" ");
//         return (
//             <div className ={classNames} onClick={}>
//                 <ToggleButton ></ToggleButton>
//             </div>
//         )
//     };

//     const ToggleButton = (props) => {
//         let classNames = ["toggle-button", props.state ? "toggle-button_position-right" : "toggle-button_position-left"].join(" ");
//         return (
//             <div className={classNames}>
//             </div>
//         )
//     }

//     let classNames = ["switch", state ? "switch_is-on" : "switch_is-off"].join(" ");
//     return(
//     <div className={classNames}><Switch state={} handleToggle={}>
//     </Switch></div>
//     );
}

export default ToggleSwitch;