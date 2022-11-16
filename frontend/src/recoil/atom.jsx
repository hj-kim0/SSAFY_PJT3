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
                name: "CPU",
                data: "cpu"
            },
            {
                name: "메인보드",
                data: "mainboard"
            },
            {
                name: "메모리",
                data: "memory"
            },
            {
                name: "GPU",
                data: "gpu"
            },
            {
                name: "파워",
                data: "power"
            },
            {
                name: "쿨러",
                data: "cooler"
            },
            {
                name: "SSD",
                data: "ssd"
            },
            {
                name: "케이스",
                data: "tower"
            },
        ]}
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
        "cartItems" : []
    },
    effects_UNSTABLEL:[persistAtom],
})

export const selectState = atom({
    key: "selectState",
    default:{
        state : -1,
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