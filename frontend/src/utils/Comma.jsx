
const Comma = (number) => {
    const temp = number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    
    return (temp);
}

export default Comma;