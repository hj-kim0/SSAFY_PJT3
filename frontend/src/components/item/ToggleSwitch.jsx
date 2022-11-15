import { useState } from "react";
import "./ToggleSwitch.scss";

const ToggleSwitch = (props) => {

    const [state, setState] = useState(props.recom);

    function handleToggle(){
        setState(!state);
    }

    const Switch = (props) => {
        let classNames = ["component-wrapper", (props.state) ? "component-wrapper-is-on" : "component-wrapper-is-on"].join(" ");
        return (
            <div className ={classNames} onClick={props.handleToggle}>
                <ToggleButton state={props.state} handleToggle={props.handleToggle}></ToggleButton>
            </div>
        )
    };

    const ToggleButton = (props) => {
        let classNames = ["toggle-button", props.state ? "toggle-button_position-right" : "toggle-button_position-left"].join(" ");
        return (
            <div className={classNames}>
            </div>
        )
    }

    let classNames = ["switch", state ? "switch_is-on" : "switch_is-off"].join(" ");
    return(
    <div className={classNames}><Switch state={state} handleToggle={handleToggle}>
    </Switch></div>
    );
}

export default ToggleSwitch;