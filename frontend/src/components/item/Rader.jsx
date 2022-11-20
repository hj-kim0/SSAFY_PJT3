import { Bar } from 'react-chartjs-2';

const MyResponsiveRadar = (props) => {

  const first = props.mylistidx;
  const second = props.comparelistidx;

  const data1 = [];
  const data2 = [];

  // console.log(props.mylist[first].parts[0].Detail);

  !!props.mylist[first].parts[0].Detail ? data1.push(props.mylist[first].parts[0].Detail.score) : data1.push(0);
  !!props.mylist[second].parts[0].Detail ? data1.push(props.mylist[second].parts[0].Detail.score) : data1.push(0);
  !!props.mylist[first].parts[3].Detail ? data2.push(props.mylist[first].parts[3].Detail.score) : data2.push(0);
  !!props.mylist[second].parts[3].Detail ? data2.push(props.mylist[second].parts[3].Detail.score) : data2.push(0);



  console.log(data1);
  console.log(data2);
  
  
  const data01 = {
    labels: ['CPU', 'CPU'],
    datasets: [{
      data : data1,
      backgroundColor:[
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
      ],
      borderWidth: 1
    }]
  }


  const data02 = {
    labels: ['GPU', 'GPU'],
    datasets: [{
      data : data2,
      backgroundColor:[
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
      ],
      borderWidth: 1
    }]
  }

  
  
    return (
        <div className="m-2 flex column align-center p-2">
            <div className="loveYa fs-32 pb-3">Compare</div>
            <div className="pt-5 bdt-s bdc-grey bdw-7 w-50p">
              <Bar data={data01}></Bar>
              <Bar data={data02}></Bar>
            </div>
        </div>
)};


export default MyResponsiveRadar;