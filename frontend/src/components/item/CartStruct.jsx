import { Link } from "@mui/material";

import { cartState } from "../../recoil/atom";
import { useRecoilState, useSetRecoilState } from "recoil";

import "./CardStruct.scss";

const Cart_list = [
    {
        id: 1,
        name : "CPU"
    },
    {
        id: 2,
        name : "메인보드"
    },
    {
        id: 3,
        name : "메모리"
    },
    {
        id: 4,
        name : "그래픽카드"
    },
    {
        id: 5,
        name : "SSD"
    },
    {
        id: 6,
        name : "HDD"
    },
    {
        id: 7,
        name : "ODD"
    },
    {
        id: 8,
        name : "케이스"
    },
    {
        id: 9,
        name : "파워"
    },
    {
        id: 10,
        name : "쿨러"
    },
    
];
const Dummy_list = [
    {
        id : 1,
        name : "i7",
        price : 1333333,
        amount : 1
    },
    {
        id : 2,
        name : "i5",
        price : 133333,
        amount : 1
    },
    {
        id : 3,
        name : "GTX 3080",
        price : 1,
        amount : 1
    },
    
];

const PcItem = ({id, name, price, img}) => (
    <li className={"pc-item pc-item-" + id}>
        <Link to={"/item/" + id}>
            <div className="pc-item-container">
                <img className="pc-item-img" src={img}/>
                <h1 className="pc-item-name">{name}</h1>
                <h2 className="pc-item-price">${price.toFixed(2)}</h2>
            </div>
        </Link>
    </li>
);



function CartItemCreator() {
    const setCart = useSetRecoilState(cartState);

    const addItem = () => {
        setCart((oldCart) => [
            ...oldCart,{
                id: 1,
                name: 1,
                description: 1,
                price: 1,
                count: 1,
            }
        ])
    }
}

const ItemCart = (items) => {
    console.log(items.items.name);
    return(
        <div className="b bd-solid rw10 pd-5 mg-2 center">{items.items.name}</div>
    );
}

const CartStruct = () => {
    const [cart, setCart] = useRecoilState(cartState);

    return (
        Cart_list.map((items) => (
            <>
            <ItemCart key={items.id} items={items}/>
            </>
        ))
    )
}

export default CartStruct;