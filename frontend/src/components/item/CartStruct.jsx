//아이템 타입 ~ CPU, 메인보드 etc

import { Link } from "react-router-dom";

const item_types = [
    {
        id : 0,
        name : "CPU",
    },
    {
        id : 1,
        name : "메인보드",
    },
]

const ItemRow = (items) => {
    const name = items.items.name;
    
    let computeridx = 0;
    // console.log(name);       
    // console.log(items.data.data[computeridx][name]);
    return(
        <tr>
            <td>
                <div className="b bd-solid rw10 pd-5 mg-2 center">{items.items.name}</div>
            </td>
            <td>
                <div className="b bd-solid rw10 pd-5 mg-2 center">
                    {items.data.data[computeridx][name][0]}
                    </div>
            </td>
        </tr>
    );
}

const CartStruct = (data) => {
    return(
        item_types.map((items) => (
            <ItemRow key={items.id} items={items} data={data}/>
        ))
    )
}

export default CartStruct;