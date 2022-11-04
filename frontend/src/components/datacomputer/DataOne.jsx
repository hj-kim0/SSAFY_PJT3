import React from "react";
import styles from "./DataOne.module.css";

const DataOne = (props) => {
  //   console.log(props);
  return (
    <div>
      <div className={styles.tdStyle}>
        <div>
          <div>{props.id}</div>
          <div className={styles.textout}>{props.name}</div>
        </div>
        <div className={styles.itemcontrol}>
          {props.price}
          <button className={styles.boxstyle}>견적담기</button>
        </div>
      </div>
    </div>
  );
};

export default DataOne;
