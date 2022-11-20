// react 전역 상태관리
import { atom } from 'recoil';
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const nameState = atom({
    key: "nameState",
    default:
        {
            names : [
            {
                idx:0,
                name: "CPU",
                data: "cpu"
            },
            {
                idx:1,
                name: "메인보드",
                data: "mainboard"
            },
            {
                idx:2,
                name: "메모리",
                data: "memory"
            },
            {
                idx:3,
                name: "GPU",
                data: "gpu"
            },
            {
                idx:4,
                name: "파워",
                data: "power"
            },
            {
                idx:5,
                name: "쿨러",
                data: "cooler"
            },
            {
                idx:6,
                name: "SSD",
                data: "ssd"
            },
            {
                idx:7,
                name: "케이스",
                data: "tower"
            },
        ]}
})

export const limitsState = atom({
    key: "limitsState",
    default: {
        names : [
        {
            idx:10,
            name:"10개씩보기",
            data:10,
        },
        {
            idx:20,
            name:"20개씩보기",
            data:20,
        },
        {
            idx:30,
            name:"30개씩보기",
            data:30,
        },
        {
            idx:40,
            name:"40개씩보기",
            data:40,
        },
    ]
}
})

export const partsState = atom({
    key: "partsState",
    default:[]
})

export const purposeState = atom({
    key: "purposeState",
    default: [
        {
            id:0,
            text : "배그",
            target : "battleground"
        },
        {
            id:1,
            text : "로아",
            target : "lostark"
        },
        {   
            id:2,
            text : "롤",
            target : "lol"
        },
        {
            id:3,
            text : "사무용",
            target : "normal"
        },
        {
            id:4,
            text : "CAD",
            target : "cad"
        },
    ]
})

export const cartState = atom({
    key: "cartState",
    default:{
        state : -1,
    }
    // effects_UNSTABLEL:[persistAtom],
})

export const selectState = atom({
    key: "selectState",
    default:{
        state : 0,
    }
}) 

export const recommendState = atom({
    key: "recommendState",
    default: {
        "budget" : 0,
        "purpose_program" : "",
        "cpu" : true,
        "gpu" : true,
        "mainboard" : true,
        "memory" : true,
        "ssd" : true,
        "cooler" : true,
        "power" : true,
        "tower" : true,
    },
})

export const estimateState = atom({
    key: "estimateState",
    default:[
        {
            "idx": 0,
            "Detail": null
        },
        {
            "idx": 1,
            "Detail": null
        },
        {
            "idx": 2,
            "Detail": null
        },
        {
            "idx": 3,
            "Detail": null
        },
        {
            "idx": 4,
            "Detail": null
        },
        {
            "idx": 5,
            "Detail": null
        },
        {
            "idx": 6,
            "Detail": null
        },
        {
            "idx": 7,
            "Detail": null
        }
    ]
})

export const simpleEstimateState = atom({
    key: "simpleEstimateState",
    default:[
        {
            userID : "", 
            parts : [null,null,null,null,null,null,null,null],
            estimateName : ""
        }
    ]
})

export const complexEstimateState = atom({
    key: "complexEstimateState",
    default:[
        {
            idx : -1,
            userID : "", 
            parts : [null,null,null,null,null,null,null,null],
            estimateName : ""
        },
    ]
})