import React from 'react';
import dummy from "../../assets/images/sample.png";
const ItemDetail = () => {
  return (
    <div className="mt-5 pt-5">
      <div className="bd-s bdw-3 br-125 m-5 p-3 flex column">
        <div className="flex">
          <div className="flex column">
            <img src={dummy} alt="" className=""/>
            <div>상세내용</div>
          </div>
        </div>
        <div className="flex row justify-center">
          <div>
            <div className="">
              <div>판매가격</div> <div>:</div>
            </div>
            <div className="">
              <div>상품코드번호</div> <div>:</div>
            </div>
            <div className="">
              <div>적립금</div> <div>:</div>
            </div>
            <div className="">
              <div>제조사</div> <div>:</div>
            </div>
            <div className="">
              <div>제품등록일</div> <div>:</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
