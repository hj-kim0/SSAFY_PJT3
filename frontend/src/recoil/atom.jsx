// react 전역 상태관리
import { atom } from 'recoil';
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const cartState = atom({
    key: "cartState",
    default:{
        "cartItems" : []
    },
    effects_UNSTABLEL:[persistAtom],
})

export const userState = atom({
    key: "",
    default:{
        "CPU" : -1,
        "CPU" : -1,
        "CPU" : -1,
        "CPU" : -1,
        "CPU" : -1,
        "CPU" : -1,
        "CPU" : -1,
        "CPU" : -1,
        "CPU" : -1,
    }
})

export const recommendState = atom({
    key: "recommendState",
    default: {
        
    }
})

export const estimateState = atom({
    key: "estimateState",
    default:{
        
    }
})


