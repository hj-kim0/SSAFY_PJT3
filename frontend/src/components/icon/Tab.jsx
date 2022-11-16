import React, { useState } from "react";
import UserEstimate from "./UserEstimate";
import ManualEstimate from "./ManualEstimate";

import "./Tab.scss";

const Tab = () => {
    const [check, setCheck] = useState(true);

    const checkTab = (chk) => {
        setCheck(chk);
    };

    const getActiveClass = (chk, className) =>
    check === chk ? className : "";

    return (
    <div className="container">
        <ul className="tab-list">
            <li
            className={`tabs ${getActiveClass(true, "active-tabs")}`}
            onClick={() => checkTab(true)}
        >
            사용자 기반 견적
            </li>
            <li
            className={`tabs ${getActiveClass(false, "active-tabs")}`}
            onClick={() => checkTab(false)}
        >
            수동 기반 견적
            </li>
        </ul>
        <div className="content-container">
            <div className={`content justify-center align-center ${getActiveClass(true, "active-content")}`}>
                <UserEstimate/>
            </div>
            <div className={`content justify-center align-center ${getActiveClass(false, "active-content")}`}>
                <ManualEstimate/>
            </div>
        </div>
    </div>
    );
};


export default Tab;