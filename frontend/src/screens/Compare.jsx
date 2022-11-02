import CartStruct from "../components/item/CartStruct";

const my_list = [
    {
        "CPU" : {
            0 : 1674,
            1 : 1203,
        }
        ,"메인보드" : {
            0 : 2233,
        }
    },
    {
        "CPU" : {
            0 : 11674,
            1 : 11203,
        }
        ,"메인보드" : {
            0 : 22233,
        }
    },   
]

const Compare = () => {
    return(
        <div className="mt-5 pt-5 flex">
            <div className="flex column">
                <CartStruct key={my_list.idx} data={my_list}/>
            </div>
            <div className="flex column">
            </div>
            
        </div>
    )
}

export default Compare;