import Tab from "../components/icon/Tab";
import DropdownCart from "./DropDownCart";

const data = [
    {
        id : 0,
        label: "PC1",
        parts : [
            {
                id: 0,
                part : [
                    {id: 1674},
                ],
                name : "CPU"
            },
            {
                id: 1,
                part : [
                    {id: 2223},
                ],
                name : "메인보드"
            },
        ],
    },
    {
        id : 1,
        label: "PC2",
        parts : [
            {
                id: 0,
                part : [
                    {id: 1000},
                    {id: 1111},
                ],
                name : "CPU"
            },
            {
                id: 1,
                part : [
                    {id: 2000},
                    {id: 2009},
                ],
                name : "메인보드"
            },
        ],
    },   
];

const AutoManual = () => {
    return(
        <div className="relative mt-5 pt-5 mb-5">
            <div className="mt-5 ">
            </div>
            <div className="mt-5 pt-5 flex">
            <div className="w-50 flex">
                <Tab/>
            </div>
            <div className="w-50 flex">
                <DropdownCart data={data}/>
            </div>
        </div>
        </div>
        );
}

export default AutoManual;