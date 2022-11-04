import React from "react";
import styles from "./OutoUser.module.css";

const OutoUser = (props) => {
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.price}>가격</div>
        <input
          type='text'
          value={props.enteredNum}
          onChange={props.changeEnteredNum}
        ></input>
      </div>
      <br />
      <br />
      <div className={styles.box}>
        <div className={styles.use}>사용 용도</div>
        <div className={styles.box6}>
          <div className={styles.box2}>
            <button
              className={props.tab === "1" ? styles.btnactive : styles.btn}
              onClick={() => {
                if (props.tab === "1") {
                  props.setTab("2");
                } else {
                  props.setTab("1");
                }
              }}
            >
              박스
            </button>
            <button
              className={props.tab === "3" ? styles.btnactive : styles.btn}
              onClick={() => {
                if (props.tab === "3") {
                  props.setTab("4");
                } else {
                  props.setTab("3");
                }
              }}
            >
              박스
            </button>
            <button
              className={props.tab === "5" ? styles.btnactive : styles.btn}
              onClick={() => {
                if (props.tab === "5") {
                  props.setTab("6");
                } else {
                  props.setTab("5");
                }
              }}
            >
              박스
            </button>
          </div>
          <div className={styles.box2}>
            <button
              className={props.tab === "7" ? styles.btnactive : styles.btn}
              onClick={() => {
                if (props.tab === "7") {
                  props.setTab("8");
                } else {
                  props.setTab("7");
                }
              }}
            >
              박스
            </button>
            <button
              className={props.tab === "9" ? styles.btnactive : styles.btn}
              onClick={() => {
                if (props.tab === "9") {
                  props.setTab("10");
                } else {
                  props.setTab("9");
                }
              }}
            >
              박스
            </button>
            <button
              className={props.tab === "11" ? styles.btnactive : styles.btn}
              onClick={() => {
                if (props.tab === "11") {
                  props.setTab("12");
                } else {
                  props.setTab("11");
                }
              }}
            >
              박스
            </button>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div className={styles.boxcenter}>
        <button>자동 견적</button>
      </div>
    </div>
  );
};

export default OutoUser;
