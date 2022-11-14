import React, { useState } from "react";
import DropdownCart from "../components/item/DropDownCart";
import MyResponsiveRadar from "../components/item/Rader";
import "./Compare.scss";

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
];

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
];

const Compare = () => {
    return(
        <div>
            <div className="kyobo fs-40 flex align-center mt-5 pt-5"> 
            <div className="">
            <div className="bdb-s bdc-grey bdw-7 pb-3   big">컴퓨터 사양 비교</div></div>            </div>
            <div className="m-2 p-5 flex mb-5  wrapper pb-3">
                <div className="small">
                <div className="kyobo fs-40 bdb-s bdc-grey bdw-7 pb-3">컴퓨터 사양 비교</div>
                </div>
                <div className="mt-5 pt-5">
                <div className="flex align-center fs-22 notoBold">내 사양</div>
                    <DropdownCart data={my_list} />
                </div>
                <div className="mt-5 pt-5">
                <div className="flex align-center fs-22 notoBold">내 견적</div>
                    <DropdownCart data={recom_list} />
                </div>
                <div className="small">
                <MyResponsiveRadar/>
                </div>
            </div>
            <div className="mt-5 pt-5 pb-3  big">
            <div className="rader"><MyResponsiveRadar/>
            </div>
            </div>
        </div>
        )
}

export default Compare;