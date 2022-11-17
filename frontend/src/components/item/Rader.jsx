import { Radar } from 'react-chartjs-2';
import { useState } from "react";

const data = {
  labels: ['CPU', '메인보드', '메모리', '그래픽카드', 'SSD', 'HDD', 'ODD'],
  datasets: [
    {
      label: 'before PC 1',
      data: [3, 9, 3, 5, 2, 3, 7],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'new PC 2',
      data: [4, 9, 6, 5, 3, 4, 8],
      backgroundColor: 'rgba(21, 255, 132, 0.2)',
      borderColor: 'rgba(251, 255, 132, 1)',
      borderWidth: 1,
    },

  ],


};


const options = {
  // scale: {
  //   ticks : { beginAtZero: true },
  // },
};


const MyResponsiveRadar = () => {

    return (
        <div className="m-2 flex column align-center p-2">
            <div className="loveYa fs-32 pb-3">Compare</div>
            <div className="pt-5 bdt-s bdc-grey bdw-7 w-50p">
              <Radar data={data} options={options}></Radar>
            </div>
        </div>
)}

export default MyResponsiveRadar;