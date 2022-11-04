import React from "react";
import DataOne from "./DataOne";
import styles from "./DataAll.module.css";
const DataAll = (props) => {
  //   const offset = (props.page - 1) * props.limit;
  return (
    <div>
      <div className={styles.boxitem}>
        <div>
          <button>인기상품순</button>
          <button>인기상품순</button>
          <button>인기상품순</button>
          <button>인기상품순</button>
        </div>
        <div>
          <label>
            <select
              type='number'
              value={props.limit}
              onChange={({ target: { value } }) =>
                props.setLimit(Number(value))
              }
            >
              <option value='10'>10개씩보기</option>
              <option value='20'>20개씩보기</option>
              <option value='30'>30개씩보기</option>
              <option value='40'>40개씩보기</option>
            </select>
          </label>
        </div>
      </div>
      {props.students
        .slice(props.offset, props.offset + props.limit)
        .map((item, idx) => {
          //   console.log(item.id);
          return (
            <div key={idx}>
              <DataOne id={item.id} price={item.price} name={item.name} />
            </div>
          );
        })}
    </div>
  );
};

export default DataAll;
