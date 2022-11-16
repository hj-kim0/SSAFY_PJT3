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
        budget : 0,
        purpose_program : "",
        cpu : true,
        gpu : true,
        mainboard : true,
        memory : true,
        ssd : true,
        cooler : true,
        power : true,
        tower : true,
    },
})

export const estimateState = atom({
    key: "estimateState",
    default:[
        {
            "idx": 0,
            "Detail": {
                "score": 14340,
                "price": "205460",
                "partsID": "16101083",
                "specsID": "Intel Core i3-12100",
                "id": "6372f6479b3ae43c1d21a32c",
                "socket": "인텔(소켓1700)",
                "title": "인텔 코어i3-12세대 12100 (엘더레이크) (정품)",
                "imgSrc": "//img.danawa.com/prod_img/500000/083/101/img/16101083_1.jpg?shrink=140:140",
                "option": {
                    "cooler": true,
                    "genuine": "genuine",
                    "gpu": true
                }
            }
        },
        {
            "idx": 1,
            "Detail": {
                "price": "100000",
                "partsID": "16301447",
                "optional": null,
                "specsID": "인텔(소켓1700)",
                "id": "63722457319c5323a8ea5c1b",
                "title": "BIOSTAR  H610MH D4 이엠텍",
                "imgSrc": "//img.danawa.com/prod_img/500000/447/301/img/16301447_1.jpg?shrink=140:140"
            }
        },
        {
            "idx": 2,
            "Detail": {
                "price": "28620",
                "partsID": "10294017",
                "optional": null,
                "specsID": "DDR4",
                "id": "6372271dd16a5e06277e9162",
                "title": "마이크론 Crucial DDR4-3200 CL22 (8GB)",
                "imgSrc": "//img.danawa.com/prod_img/500000/017/294/img/10294017_1.jpg?shrink=140:140"
            }
        },
        {
            "idx": 3,
            "Detail": null
        },
        {
            "idx": 4,
            "Detail": {
                "productID": null,
                "price": "48060",
                "partsID": "13190384",
                "optional": null,
                "id": "6372289b7abc3a171ebff234",
                "title": "삼성전자  870 EVO (250GB)",
                "imgSrc": "//img.danawa.com/prod_img/500000/384/190/img/13190384_1.jpg?shrink=140:140"
            }
        },
        {
            "idx": 5,
            "Detail": {
                "formfactor": "ATX 파워",
                "price": "56500",
                "partsID": "14677133",
                "id": "637227d82833d3e4221cb006",
                "power": "500W",
                "title": "마이크로닉스  Classic II 풀체인지 500W 80PLUS BRONZE 230V EU",
                "imgSrc": "//img.danawa.com/prod_img/500000/133/677/img/14677133_1.jpg?shrink=140:140"
            }
        },
        {
            "idx": 6,
            "Detail": null
        },
        {
            "idx": 7,
            "Detail": {
                "size": "미들타워",
                "price": 39000,
                "partsID": "13381619",
                "id": "63722ba1107c4fb53ebd4b61",
                "title": "darkFlash  DK200 RGB 강화유리 (블랙)",
                "imgSrc": "//img.danawa.com/prod_img/500000/619/381/img/13381619_1.jpg?shrink=140:140"
            }
        }
    ]
})