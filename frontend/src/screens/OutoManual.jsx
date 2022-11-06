import React, { useState } from "react";
import styles from "./OutoManual.module.scss";
import Computerlist from "./Computerlist";
import OutoUser from "../components/datacomputer/OutoUser";
import Tab from "../components/icon/Tab";

const OutoManual = () => {
  const [tab, setTab] = useState("0");
  const [check, setCheck] = useState(true);
  const [enteredNum, setEnterdNum] = useState("");
  const changeEnteredNum = (e) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(",", ""));
    setEnterdNum(removedCommaValue.toLocaleString());
  };
  return (
    <div className={styles.body_container}>
    <div className={styles.body_wrapper}>
      <div className={styles.boxtop}>
        <button
          onClick={() => {
            if (check === false) {
              setCheck(true);
            }
          }}
        >
          사용자 기반 견적
        </button>
        <button
          onClick={() => {
            if (check === true) {
              setCheck(false);
            }
          }}
        >
          수동 기반 견적
        </button>
      </div>
      <br />
      <br />
      {check === true && (
        <div>
          <OutoUser
            enteredNum={enteredNum}
            changeEnteredNum={changeEnteredNum}
            tab={tab}
            setTab={setTab}
          />
        </div>
      )}
      {check === false && (
        <div>
          <Computerlist />
        </div>
      )}
    </div>
    <Tab/>
    </div>
  );
};

export default OutoManual;
