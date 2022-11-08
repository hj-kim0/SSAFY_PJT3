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

