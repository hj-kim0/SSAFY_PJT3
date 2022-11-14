import React from "react";
import CPU from "../assets/images/Parts/CPU.jpg";
import Board from "../assets/images/Parts/MainBoard.jpg";
import RAM from "../assets/images/Parts/RAM.jpg";
import GPU from "../assets/images/Parts/GPU.png";
import HDD from "../assets/images/Parts/HDD.jpg";
import SSD from "../assets/images/Parts/SSD.jpg";
import ODD from "../assets/images/Parts/ODD.jpg";
import Case from "../assets/images/Parts/Case.jpg";
import Power from "../assets/images/Parts/Power.jpg";
import Fan from "../assets/images/Parts/Fan.jpg";

export default function Guide() {
  return (
    <div style={{ marginTop: "100px", marginBottom: "100px" }} align="center">
      <b>
        <big>본 페이지는 가이드 페이지 입니다.</big>
      </b>
      <p
        style={{
          color: "3c3c3c",
        }}
      >
        부품이 각각 어떤 역할을 하는지 비유를 통해 알아보실 수 있습니다.
      </p>
      <div
        style={{
          width: "800px",
          border: "1px solid #222",
          padding: "10px",
          margin: "10px",
          textAlign: "center",
          borderRadius: "20px 10px",
        }}
      >
        <img
          height="100px"
          width="100px"
          style={{
            float: "left",
            marginRight: "20px",
            marginBottom: "10px",
            borderRadius: "10px / 5px",
          }}
          src={CPU}
          alt="이 부품은 CPU 입니다."
        />
        <p>
          <b>
            <big>CPU(또는 중앙처리장치)</big>
          </b>
          는 이름에 걸맞게 컴퓨터를 통제하는 핵심적인 장치입니다. <br />
          컴퓨터를 하나의 농장으로 비유하면
          <br /> 농장주가 지시를 내릴 수 있는 인부라고 할 수 있습니다.
        </p>
      </div>
      <div
        style={{
          width: "800px",
          border: "1px solid #222",
          padding: "10px",
          margin: "10px",
          textAlign: "center",
          borderRadius: "20px 10px",
        }}
      >
        <img
          height="100px"
          width="100px"
          style={{
            float: "left",
            marginRight: "20px",
            marginBottom: "10px",
            borderRadius: "10px / 5px",
          }}
          src={Board}
          alt="이 부품은 메인보드 입니다."
        ></img>
        <p>
          <b>
            <big>메인보드(또는 마더보드)</big>
          </b>
          는 컴퓨터의 각종 부품을 연결해주는 장치입니다. <br />
          컴퓨터를 하나의 농장으로 비유하면
          <br /> 인부들의 숙소 안에 있는 기본 시설이라 할 수 있습니다.
        </p>
      </div>
      <div
        style={{
          width: "800px",
          border: "1px solid #222",
          padding: "10px",
          margin: "10px",
          textAlign: "center",
          borderRadius: "20px 10px",
        }}
      >
        <img
          height="100px"
          width="100px"
          style={{
            float: "left",
            marginRight: "20px",
            marginBottom: "10px",
            borderRadius: "10px / 5px",
          }}
          src={RAM}
          alt="이 부품은 메모리 입니다."
        ></img>
        <p>
          <b>
            <big>메모리(또는 RAM)</big>
          </b>
          는 동시에 더 많은 프로그램을 실행하게 해주는 장치입니다. <br />
          컴퓨터를 하나의 농장으로 비유하면
          <br /> 수확물을 옮길 수 있는 수레의 크기라고 할 수 있습니다.
        </p>
      </div>
      <div
        style={{
          width: "800px",
          border: "1px solid #222",
          padding: "10px",
          margin: "10px",
          textAlign: "center",
          borderRadius: "20px 10px",
        }}
      >
        <img
          height="100px"
          width="100px"
          style={{
            float: "left",
            marginRight: "20px",
            marginBottom: "10px",
            borderRadius: "10px / 5px",
          }}
          src={GPU}
          alt="이 부품은 그래픽카드 입니다."
        ></img>
        <p>
          <b>
            <big>그래픽카드(또는 GPU)</big>
          </b>
          는 더 매끄러운 게임을 하게 해주는 장치입니다. <br />
          컴퓨터를 하나의 농장으로 비유하면
          <br /> 손만 필요로 하는 것은 서투르지만,
          <br /> 트랙터같이 특정 일에 최적화 된 기계와 같다고 할 수 있습니다.
        </p>
      </div>
      <div
        style={{
          width: "800px",
          border: "1px solid #222",
          padding: "10px",
          margin: "10px",
          textAlign: "center",
          borderRadius: "20px 10px",
        }}
      >
        <img
          height="100px"
          width="100px"
          style={{
            float: "left",
            marginRight: "20px",
            marginBottom: "10px",
            borderRadius: "10px / 5px",
          }}
          src={HDD}
          alt="이 부품은 하드디스크 입니다."
        ></img>
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
      <div
        style={{
          width: "800px",
          border: "1px solid #222",
          padding: "10px",
          margin: "10px",
          textAlign: "center",
          borderRadius: "20px 10px",
        }}
      >
        <img
          height="100px"
          width="100px"
          style={{
            float: "left",
            marginRight: "20px",
            marginBottom: "10px",
            borderRadius: "10px / 5px",
          }}
          src={SSD}
          alt="이 부품은 SSD 입니다."
        ></img>
        <p>
          <b>
            <big>SSD</big>
          </b>
          는 빠르게 자료를 읽어주는 장치입니다. <br />
          컴퓨터를 하나의 농장으로 비유하면
          <br /> 가격이 비싸지만, 최신 시설의 수확물 저장 창고와 같다고 할 수
          있습니다.
        </p>
      </div>
      <div
        style={{
          width: "800px",
          border: "1px solid #222",
          padding: "10px",
          margin: "10px",
          textAlign: "center",
          borderRadius: "20px 10px",
        }}
      >
        <img
          height="100px"
          width="100px"
          style={{
            float: "left",
            marginRight: "20px",
            marginBottom: "10px",
            borderRadius: "10px / 5px",
          }}
          src={ODD}
          alt="이 부품은 ODD 입니다."
        ></img>
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
      <div
        style={{
          width: "800px",
          border: "1px solid #222",
          padding: "10px",
          margin: "10px",
          textAlign: "center",
          borderRadius: "20px 10px",
        }}
      >
        <img
          height="100px"
          width="100px"
          style={{
            float: "left",
            marginRight: "20px",
            marginBottom: "10px",
            borderRadius: "10px / 5px",
          }}
          src={Case}
          alt="이 부품은 케이스 입니다."
        ></img>
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
      <div
        style={{
          width: "800px",
          border: "1px solid #222",
          padding: "10px",
          margin: "10px",
          textAlign: "center",
          borderRadius: "20px 10px",
        }}
      >
        <img
          height="100px"
          width="100px"
          style={{
            float: "left",
            marginRight: "20px",
            marginBottom: "10px",
            borderRadius: "10px / 5px",
          }}
          src={Power}
          alt="이 부품은 파워 입니다."
        ></img>
        <p>
          <b>
            <big>파워</big>
          </b>
          는 모든 부품들에게 일정량 이상의 전원을 공급해주는 장치입니다. <br />
          컴퓨터를 하나의 농장으로 비유하면 인부들에게 주는 일당이며,
          <br />
          일정량은 항상 주어야 하지만 약간은 더 주어도 괜찮습니다.
        </p>
      </div>
      <div
        style={{
          width: "800px",
          border: "1px solid #222",
          padding: "10px",
          margin: "10px",
          textAlign: "center",
          borderRadius: "20px 10px",
        }}
      >
        <img
          height="100px"
          width="100px"
          style={{
            float: "left",
            marginRight: "20px",
            marginBottom: "10px",
            borderRadius: "10px / 5px",
          }}
          src={Fan}
          alt="이 부품은 쿨러 입니다."
        ></img>
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
