import React, { useState } from 'react';
// import styled from 'styled-components';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';
// import { TextareaAutosize } from '@material-ui/core';
import styles from './MoneyUse.module.css';
import Computerlist from './Computerlist';

const MoneyUse = () => {
  const [tab, setTab] = useState('0');
  const [check, setCheck] = useState(true);
  const [enteredNum, setEnterdNum] = useState('');
  const changeEnteredNum = (e) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(',', ''));
    setEnterdNum(removedCommaValue.toLocaleString());
  };
  return (
    <div>
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
          <div className={styles.box}>
            <div className={styles.price}>가격</div>
            <input
              type="text"
              value={enteredNum}
              onChange={changeEnteredNum}
            ></input>
          </div>
          <br />
          <br />
          <div className={styles.box}>
            <div className={styles.use}>사용 용도</div>
            <div className={styles.box6}>
              <div className={styles.box2}>
                <button
                  className={tab === '1' ? styles.btnactive : styles.btn}
                  onClick={() => {
                    if (tab === '1') {
                      setTab('2');
                    } else {
                      setTab('1');
                    }
                  }}
                >
                  박스
                </button>
                <button
                  className={tab === '3' ? styles.btnactive : styles.btn}
                  onClick={() => {
                    if (tab === '3') {
                      setTab('4');
                    } else {
                      setTab('3');
                    }
                  }}
                >
                  박스
                </button>
                <button
                  className={tab === '5' ? styles.btnactive : styles.btn}
                  onClick={() => {
                    if (tab === '5') {
                      setTab('6');
                    } else {
                      setTab('5');
                    }
                  }}
                >
                  박스
                </button>
              </div>
              <div className={styles.box2}>
                <button
                  className={tab === '7' ? styles.btnactive : styles.btn}
                  onClick={() => {
                    if (tab === '7') {
                      setTab('8');
                    } else {
                      setTab('7');
                    }
                  }}
                >
                  박스
                </button>
                <button
                  className={tab === '9' ? styles.btnactive : styles.btn}
                  onClick={() => {
                    if (tab === '9') {
                      setTab('10');
                    } else {
                      setTab('9');
                    }
                  }}
                >
                  박스
                </button>
                <button
                  className={tab === '11' ? styles.btnactive : styles.btn}
                  onClick={() => {
                    if (tab === '11') {
                      setTab('12');
                    } else {
                      setTab('11');
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
      )}
      {check === false && (
        <div>
          <Computerlist></Computerlist>
        </div>
      )}
    </div>
  );
};

export default MoneyUse;
