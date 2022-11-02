import React from 'react';
import styles from './ItemDetail.module.css';
import sample from '../../assets/images/sample.png';

const ItemDetail = () => {
  return (
    <div>
      <div className={styles.boxtop}>
        <img src={sample} alt="" className={styles.box}></img>

        <div className={styles.boxcolumn}>
          <div>상세fffffffffffffffffffffff</div>
          <hr />
          <div>
            <div className={styles.text}>
              <div>판매가격</div> <div>:</div>
            </div>
            <div className={styles.text}>
              <div>상품코드번호</div> <div>:</div>
            </div>
            <div className={styles.text}>
              <div>적립금</div> <div>:</div>
            </div>
            <div className={styles.text}>
              <div>제조사</div> <div>:</div>
            </div>
            <div className={styles.text}>
              <div>제품등록일</div> <div>:</div>
            </div>
            <div className={styles.text}>
              <div>배송 및 기타</div> <div>:</div>
            </div>
            <div className={styles.number}>
              <div>주문수량</div>
              <input
                type="number"
                min="0"
                max="100"
                // value="1"
                className={styles.cnt}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.guide}>
        <button>조립가이드</button>
      </div>
    </div>
  );
};

export default ItemDetail;
