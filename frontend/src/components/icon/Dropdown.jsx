import { useState } from "react";
import { useRecoilState } from "recoil";
import { nameState } from "../../recoil/atom";
import "./Dropdown.scss";

const Dropdown = (props) => {
    
    const [isOpen, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [name, setname] = useRecoilState(nameState);
    
    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
        setOpen(!isOpen);
        props.chgIndex(id);
    }
                    
    // console.log(props.data[selectedItem].parts.map)
    return (<>
        <div className="flex row">
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                {
                    selectedItem ? props.data.find(item => item.idx == selectedItem).estimateName :
                    props.text
                }
                <b className={`icon ${isOpen && "open"}`}> ➜ </b>
            </div>
            <div className={`dropdown-body ${isOpen && 'open'}`}>
                {
                    props.data.map(item => {
                        return (
                        <div className="dropdown-item" key={item.idx} onClick={e => handleItemClick(e.target.id)} id={item.idx}>
                            <span className={`dropdown-item-dot ${item.idx == selectedItem && 'selected'}`}>• </span>
                            {item.estimateName}
                        </div>
                        );
                    }       
                )}
            </div>
        </div>
        <div className="m-5 bd-s bdw-3 bdc-grey br-075 p-3" >
            {
                !!selectedItem ? 
                props.data[selectedItem].parts.map(item => {
                    return(
                        !!item.Detail ? 
                            <>
                            <div className="m-1 p-1" key={item.idx}>
                                <div className="flex fs-22 notoBold">{name.names[item.idx].name}</div>
                                <div className="flex">{item.Detail.title}</div>
                            </div>
                            </>
                            : 
                            <>
                            <div className="m-1 p-1 " key={item.idx}>
                                <div className="flex fs-22 notoBold">{name.names[item.idx].name}</div>
                                <div className="flex">없음</div>
                            </div>
                            </>
                    )
                })
                :<></>
            }
        </div>
        </div>
    </>
    )
}

export default Dropdown;