import React from "react";
import CPU from "../assets/images/parts/CPU.jpg";
import Board from "../assets/images/parts/MainBoard.png";
import RAM from "../assets/images/parts/RAM.jpg";
import GPU from "../assets/images/parts/GPU.jpg";
import HDD from "../assets/images/parts/HDD.jpg";
import SSD from "../assets/images/parts/SSD.jpg";
import ODD from "../assets/images/parts/ODD.jpg";
import Case from "../assets/images/parts/Case.jpg";
import Power from "../assets/images/parts/Power.jpg";
import Fan from "../assets/images/parts/Fan.jpg";

import "./Guide.scss";

export default function Guide() {
  return (
    <div className="guide_body">
      <b>
        <big>본 페이지는 컴퓨터 부품 가이드 페이지 입니다.</big>
      </b>
      <p
        style={{
          color: "3c3c3c",
        }}
      >
        부품이 각각 어떤 역할을 하는지 비유를 통해 알아보실 수 있습니다. <br />
        커서를 이미지 위에 올릴 경우 부품 이미지가 확대되어 나타납니다.
      </p>
      <div className="parts_bind">
        <img id="parts_picture" src={CPU} alt="이 부품은 CPU 입니다." />
        <p>
          <b>
            <big>CPU(중앙처리장치)</big>
          </b>
          는 이름에 걸맞게 컴퓨터를 통제하는 핵심적인 장치입니다. <br />
          컴퓨터를 하나의 농장으로 비유하면
          <br /> 농장주가 지시를 내릴 수 있는 인부라고 할 수 있습니다. <br/>
          <div className="cpu_detail">
          코어의 수 : 인부의 수 <br />
          쓰레드 수 : 인부의 손 갯수 <br />
          오버클럭 : 인부의 발까지 써서 수확 <br />
          캐쉬 메모리 : 인부가 메고 있는 백팩 <br />
          i7 - 10900 : 7명의 10년도 생의 손이 900개인 인부
          </div>
        </p>
      </div>
      <div className="parts_bind">
        <img id="parts_picture" src={Board} alt="이 부품은 메인보드 입니다." />
        <p>
          <b>
            <big>메인보드(마더보드)</big>
          </b>
          는 컴퓨터의 각종 부품을 연결해주는 장치입니다. <br />
          컴퓨터를 하나의 농장으로 비유하면
          <br /> 인부들의 숙소 안에 있는 기본 시설이라 할 수 있습니다.
        </p>
      </div>
      <div className="parts_bind">
        <img id="parts_picture" src={RAM} alt="이 부품은 메모리 입니다." />
        <p>
          <b>
            <big>메모리(RAM)</big>
          </b>
          는 동시에 더 많은 프로그램을 실행하게 해주는 장치입니다. <br />
          컴퓨터를 하나의 농장으로 비유하면
          <br /> 수확물을 옮길 수 있는 수레의 크기라고 할 수 있습니다. <br/>
          옥수수를 많이 따도 수레가 작으면 한번에 가져가지 못하기 때문에 다다익램이라는 말이 있습니다.
        </p>
      </div>
      <div className="parts_bind">
        <img id="parts_picture" src={GPU} alt="이 부품은 그래픽카드 입니다." />
        <p>
          <b>
            <big>그래픽카드(GPU)</big>
          </b>
          는 그래픽작업을 전문으로 처리하는 영상송출 장치입니다. <br />
          컴퓨터를 하나의 농장으로 비유하면
          <br /> 옥수수 수확에는 서투르지만,
          <br /> 감자 수확(영상송출)을 전문으로 하는 인부라고 할 수 있습니다.
        </p>
      </div>
      <div className="parts_bind">
        <img id="parts_picture" src={HDD} alt="이 부품은 하드디스크 입니다." />
        <p>
          <b>
            <big>HDD</big>
          </b>
          는 더 많은 자료를 저장해주는 장치입니다. <br />
          컴퓨터를 하나의 농장으로 비유하면
          <br /> 시설은 구형이지만, 넓고 저렴한 수확물 저장 창고와 같다고 할 수
          있습니다.
        </p>
      </div>
      <div className="parts_bind">
        <img id="parts_picture" src={SSD} alt="이 부품은 SSD 입니다." />
        <p>
          <b>
            <big>SSD</big>
          </b>
          는 빠르게 자료를 읽어주는 장치입니다. <br />
          컴퓨터를 하나의 농장으로 비유하면
          <br /> 가격이 비싸지만, 최신 시설의 수확물 저장 창고와 같다고 할 수
          있습니다. <br/>
          RAM 과 비슷하게 생긴 MVMe방식 SSD는 안에 컨베이어 벨트까지 깔린 최신 시설의 가장 빠른 저장 창고라고 할 수 있습니다.
        </p>
      </div>
      <div className="parts_bind">
        <img id="parts_picture" src={ODD} alt="이 부품은 ODD 입니다." />
        <p>
          <b>
            <big>ODD</big>
          </b>
          는 CD와 같은, 디스크를 읽어주는 장치입니다. <br />
          컴퓨터를 하나의 농장으로 비유하면
          <br /> 다른 창고에 저장되어 있는 수확물을 확인하는 장치라고 할 수
          있습니다.
        </p>
      </div>
      <div className="parts_bind">
        <img id="parts_picture" src={Case} alt="이 부품은 케이스 입니다." />
        <p>
          <b>
            <big>케이스</big>
          </b>
          는 모든 부품들을 적재적소에 배치하며, 외관을 담당하는 장치입니다.{" "}
          <br />
          컴퓨터를 하나의 농장으로 비유하면
          <br /> 인부들의 숙소와 같다고 할 수 있습니다.
        </p>
      </div>
      <div className="parts_bind">
        <img id="parts_picture" src={Power} alt="이 부품은 파워 입니다." />
        <p>
          <b>
            <big>파워</big>
          </b>
          는 모든 부품들에게 일정량 이상의 전원을 공급해주는 장치입니다. <br />
          컴퓨터를 하나의 농장으로 비유하면 인부들에게 주는 일당이며,
          <br />
          일정량은 항상 주어야 하지만 약간 넉넉하게 주는것이 더 좋습니다.
        </p>
      </div>
      <div className="parts_bind">
        <img id="parts_picture" src={Fan} alt="이 부품은 쿨러 입니다." />
        <p>
          <b>
            <big>쿨러</big>
          </b>
          는 부품들을 사용할수록 열이 발생하는데 열을 발산해주는 장치입니다.{" "}
          <br />
          컴퓨터를 하나의 농장으로 비유하면
          <br /> 인부들이 사용할 수 있는 에어컨이라 할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
