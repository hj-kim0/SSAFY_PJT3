import { useState } from "react";
import "./Dropdown.scss";

const Dropdown = (props) => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(props.data);
    const text = useState(props.text);
    const [selectedItem, setSelectedItem] = useState(null);
 
    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : 
        setSelectedItem(id);
        setOpen(!isOpen);
        props.chgIndex(id);
    }

    return (
    <div className='dropdown'>
        <div className='dropdown-header' onClick={toggleDropdown}>
            {selectedItem ? 
            items.find(item => item.id == selectedItem).label : 
            ((text)==null ? "null" : text )}
                <b className={`icon ${isOpen && "open"}`}> ➜ </b>
                </div>
                <div className={`dropdown-body ${isOpen && 'open'}`}>
                    {items.map(item => (
                    <div className="dropdown-item" key={items.id} onClick={e => handleItemClick(e.target.id)} id={item.id}>
                        <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
                        {item.label}
                </div>
            ))}
        </div>
    </div>
    )
}

export default Dropdown;