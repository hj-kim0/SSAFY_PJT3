import React from "react";
import CPU from "../assets/images/Parts/CPU.jpg"
import Board from "../assets/images/Parts/MainBoard.jpg"
import RAM from "../assets/images/Parts/RAM.jpg"
import GPU from "../assets/images/Parts/GPU.png"
import HDD from "../assets/images/Parts/HDD.jpg"
import SSD from "../assets/images/Parts/SSD.jpg"
import ODD from "../assets/images/Parts/ODD.jpg"
import Case from "../assets/images/Parts/Case.jpg"
import Power from "../assets/images/Parts/Power.jpg"
import Fan from "../assets/images/Parts/Fan.jpg"
import { border } from "@mui/system";


export default function Guide() {
  return(
    <div style={{marginTop: "100px"}}>
      <div
      style={{width:"800px", border:"1px solid #222", padding: "10px", margin: "10px", textAlign: "center",}}>
        <img height ="100px"
        width= "100px"
        style={{float: "left", marginRight: "20px", marginBottom: "10px" }}
        src={{CPU}}
        alt="이 부품은 CPU 입니다."/>
      <p><b><big>CPU</big></b>는 컴퓨터를 통제하는 핵심적인 장치입니다. <br/>컴퓨터 부품들을 하나의 농장으로 비유하면<br/> 농장주가 지시를 내릴 수 있는 인부라고 할 수 있습니다.</p>
      </div>
      <div
      style={{width:"800px", border:"1px solid #222", padding: "10px", margin: "10px", textAlign: "center",}}>
        <img height ="100px"
        width= "100px"
        style={{float: "left", marginRight: "20px", marginBottom: "10px" }}
        src={{Board}}></img>
      <p><b><big>메인보드(또는 마더보드)</big></b>는 컴퓨터의 각종 부품을 연결해주는 장치입니다. <br/>컴퓨터 부품들을 하나의 농장으로 비유하면<br/> 인부들의 숙소 안에 있는 기본 시설이라 할 수 있습니다.</p>
      </div>
      <div
      style={{width:"800px", border:"1px solid #222", padding: "10px", margin: "10px", textAlign: "center",}}>
        <img height ="100px"
        width= "100px"
        style={{float: "left", marginRight: "20px", marginBottom: "10px" }}
        src={{RAM}}></img>
      <p><b><big>메모리(또는 RAM)</big></b>는 동시에 더 많은 프로그램을 실행하게 해주는 장치입니다. <br/>컴퓨터 부품들을 하나의 농장으로 비유하면<br/> 수확물을 옮길 수 있는 수레의 크기라고 할 수 있습니다.</p>
      </div>
      <div
      style={{width:"800px", border:"1px solid #222", padding: "10px", margin: "10px", textAlign: "center",}}>
        <img height ="100px"
        width= "100px"
        style={{float: "left", marginRight: "20px", marginBottom: "10px" }}
        src={{GPU}}></img>
      <p><b><big>그래픽카드(또는 GPU)</big></b>는 더 매끄러운 게임을 하게 해주는 장치입니다. <br/>컴퓨터 부품들을 하나의 농장으로 비유하면<br/> 손만 필요로 하는 것은 잘 못하지만,<br/> 트랙터같이 특정 일에 최적화 된 기계와 같다고 할 수 있습니다.</p>
      </div>
      <div
      style={{width:"800px", border:"1px solid #222", padding: "10px", margin: "10px", textAlign: "center",}}>
        <img height ="100px"
        width= "100px"
        style={{float: "left", marginRight: "20px", marginBottom: "10px" }}
        src={{HDD}}></img>
      <p><b><big>HDD</big></b>는 더 많은 자료를 저장해주는 장치입니다. <br/>컴퓨터 부품들을 하나의 농장으로 비유하면<br/> 시설은 구형이지만, 가격이 저렴한 수확물 저장 창고와 같다고 할 수 있습니다.</p>
      </div>
      <div
      style={{width:"800px", border:"1px solid #222", padding: "10px", margin: "10px", textAlign: "center",}}>
        <img height ="100px"
        width= "100px"
        style={{float: "left", marginRight: "20px", marginBottom: "10px" }}
        src={{SSD}}></img>
      <p><b><big>SSD</big></b>는 빠르게 자료를 읽어주는 장치입니다. <br/>컴퓨터 부품들을 하나의 농장으로 비유하면<br/> 가격이 비싼, 최신 시설의 수확물 저장 창고와 같다고 할 수 있습니다.</p>
      </div>
      <div
      style={{width:"800px", border:"1px solid #222", padding: "10px", margin: "10px", textAlign: "center",}}>
        <img height ="100px"
        width= "100px"
        style={{float: "left", marginRight: "20px", marginBottom: "10px" }}
        src={{ODD}}></img>
      <p><b><big>ODD</big></b>는 CD와 같은 디크스를 읽어주는 장치입니다. <br/>컴퓨터 부품들을 하나의 농장으로 비유하면<br/> 다른 창고에 저장되어 있는 수확물을 확인하는 장치라고 할 수 있습니다.</p>
      </div>
      <div
      style={{width:"800px", border:"1px solid #222", padding: "10px", margin: "10px", textAlign: "center",}}>
        <img height ="100px"
        width= "100px"
        style={{float: "left", marginRight: "20px", marginBottom: "10px" }}
        src={{Case}}></img>
      <p><b><big>케이스</big></b>는 모든 부품들을 적재적소에 배치하며, 외관을 담당하는 장치입니다. <br/>컴퓨터 부품들을 하나의 농장으로 비유하면<br/> 인부들의 숙소와 같다고 할 수 있습니다.</p>
      </div>
      <div
      style={{width:"800px", border:"1px solid #222", padding: "10px", margin: "10px", textAlign: "center",}}>
        <img height ="100px"
        width= "100px"
        style={{float: "left", marginRight: "20px", marginBottom: "10px" }}
        src={{Power}}></img>
      <p><b><big>파워</big></b>는 모든 부품들에게 일정량 이상의 전원을 공급해주는 장치입니다. <br/>컴퓨터 부품들을 하나의 농장으로 비유하면 인부들에게 주는 월급이며,<br/>일정량은 항상 주어야 하지만 약간은 더 주어도 괜찮다고 할 수 있습니다.</p>
      </div>
      <div
      style={{width:"800px", border:"1px solid #222", padding: "10px", margin: "10px", textAlign: "center",}}>
        <img height ="100px"
        width= "100px"
        style={{float: "left", marginRight: "20px", marginBottom: "10px" }}
        src={{Fan}}></img>
      <p><b><big>쿨러</big></b>는 부품들을 사용할수록 열이 발생하는데 열을 발산해주는 장치입니다. <br/>컴퓨터 부품들을 하나의 농장으로 비유하면<br/> 인부들이 사용할 수 있는 에어컨이라 할 수 있습니다.</p>
      </div>
    </div>
  );
}