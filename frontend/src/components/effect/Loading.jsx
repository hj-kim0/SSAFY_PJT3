import React from "react";
import Spinner from "../../assets/images/loading/spin.gif";

export default () => {
    return (
        <>
            <div className="flex justify-center align-center">
            <img src = {Spinner} width="64px" height="64px"/>
            </div>
        </>
    )
}