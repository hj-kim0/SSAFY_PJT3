import React, { useState } from "react";
import DropdownCart from "./DropDownCart";

const my_list = [
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
]

const recom_list = [
    {
        id : 0,
        label: "PC1",
        parts : [
            {
                id: 0,
                part : [
                    {id: 1244},
                    {id: 1554},
                    {id: 1557},
                ],
                name : "CPU"
            },
            {
                id: 1,
                part : [
                    {id: 2423},

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
                    {id: 1131},
                    {id: 1557},
                ],
                name : "CPU"
            },
            {
                id: 1,
                part : [
                    {id: 2031},
                    {id: 2999},
                ],
                name : "메인보드"
            },
        ],
    },   
]

const Compare = () => {
    return(
        <div className="m-5 p-5 container flex">
        <DropdownCart data={my_list}/>
        <DropdownCart data={recom_list}/>
        </div>
        )
}

export default Compare;