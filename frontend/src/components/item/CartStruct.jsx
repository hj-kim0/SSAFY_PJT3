//아이템 타입 ~ CPU, 메인보드 etc
import "./CartStruct.scss";

const CartStruct = (props) => {
    console.log(props);
    return(
        props.data.parts.map((items) => (
            <>
            <div className="b bd-solid rw10 pd-5 mg-2 center">
                {items.name}
            </div>
            <div className="b bd-solid rw10 pd-5 mg-2 center" >
                {items.part.map((items2) => (
                    <div key={items2.id}>
                        {items2.id}
                        {/*여기서 카트 리스트를 띄우는데 드롭다운형식을 다시 채용*/}
                    </div>
                ))}
            </div>
        </>
        ))
    )
}

export default CartStruct;