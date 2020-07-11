
//import CanvasJSReact from './canvasjs.react';



// function MyChart() {
  // let [dataValue,setData] = useState([]);
  // useEffect(()=>{
  
//   let CanvasJS = CanvasJSReact.CanvasJS;
// let CanvasJSChart = CanvasJSReact.CanvasJSChart;
//     const data = React.useMemo(
//       () => [
//         {
//           label: 'Series 1',
//           data:[{ x: dataValue[0], y: 5 }, { x: 2, y: 8 }, { x: 3, y: 14 }]
//         },
//         // {
//         //   label: 'Series 2',
//         //   data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
//         // },
//         // {
//         //   label: 'Series 3',
//         //   data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
//         // }
//       ],
//       []
//     )
   
//     const axes = React.useMemo(
//       () => [
//         { primary: true, type: 'linear', position: 'bottom' },
//         { type: 'linear', position: 'left' }
//       ],
//       []
//     )
   
//     // return (
//     //   <div
//     //     style={{
//     //       width: '400px',
//     //       height: '300px'
//     //     }}
//     //   >
//     //     <Chart data={data} axes={axes} />
//     //   </div>
//     //////////////////////////////////////////////Canvas Start from Here Barchart
// //     let CanvasJS = CanvasJSReact.CanvasJS;
// //   let CanvasJSChart = CanvasJSReact.CanvasJSChart;
// //   const options = {
// //     title: {
// //       text: "COVID 19 CHART"
// //     },
// //     data: [{				
// //               type: "column",
// //               dataPoints: [
// //                   { label: "Apple",  y: 10  },
// //                   { label: "Orange", y: 15  },
// //                   { label: "Banana", y: 25  },
// //                   { label: "Mango",  y: 30  },
// //                   { label: "Grape",  y: 28  }
// //               ]
// //      }]
// // //////////////////////////// CanvasLine Chart
// const options = {
//   animationEnabled: true,
//   exportEnabled: true,
//   theme: "light2", // "light1", "dark1", "dark2"
//   title:{
//     text: "COVID 19 Pakistan Line Chart"
//   },
//   axisY: {
//     title: "Daily Cases",
//     includeZero: false,
//     suffix: "%"
//   },
//   axisX: {
//     title: "Date Wise",
//     prefix: "W",
//     interval: 2
//   },
//   data: [{
//     type: "line",
//     toolTipContent: "Week {x}: {y}%",
//     dataPoints: [
//       { x: 1, y: 64 },
//       { x: 2, y: 61 },
//       { x: 3, y: 64 },
//       { x: 4, y: 62 },
//       { x: 5, y: 64 },
//       { x: 6, y: 60 },
//       { x: 7, y: 58 },
//       { x: 8, y: 59 },
//       { x: 9, y: 53 },
//       { x: 10, y: 54 },
//       { x: 11, y: 61 },
//       { x: 12, y: 60 },
//       { x: 13, y: 55 },
//       { x: 14, y: 60 },
//       { x: 15, y: 56 },
//       { x: 16, y: 60 },
//       { x: 17, y: 59.5 },
//       { x: 18, y: 63 },
//       { x: 19, y: 58 },
//       { x: 20, y: 54 },
//       { x: 21, y: 59 },
//       { x: 22, y: 64 },
//       { x: 23, y: 59 }
//     ]
//   }]
// }
  
//  return (
//     <div>
//       <h1>React Line Chart</h1>
//       <CanvasJSChart options = {options}
//           /* onRef = {ref => this.chart = ref} */
//       />
//     </div>
/////////////////////////////////////////////////////////////


import React,{useEffect,useState} from 'react';
import { Line } from 'react-chartjs-2';
import moment from "moment";
let DailyCases= [];
let dateCases =[];
let i= 0;
let j = 0;
let chartData;
let startDate;
let labels;
let date;
let datas;
let ctx;
let gradient;
let options;

function Chart(){
 
  
  // fetch("http://api.coronatracker.com/v3/analytics/trend/country?countryCode=PK&startDate=2020-02-27&endDate=2020-07-09", requestOptions)
  //   .then(response => response.json())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
  let [value,setData] = useState([{}]);
  useEffect(()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
          async function getApiData(){
      const response = await fetch('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/owid-covid-data.json',requestOptions);
      const dataValue  =  await response.json();
      //console.log(dataValue['PAK']['data'][111]['new_cases']);
      setData(dataValue['PAK']['data']);
      //console.log(dataValue);
      // console.log(response);
      // console.log(value)
       
      }

      getApiData();
    
  },[]);
  console.log(value[0]['new_cases']);
  console.log(value[0]['date']);
//   textRepsonse = JSON.parse(JSON.stringify(value.PAK));
//   console.log(textRepsonse);
// //textRepsonse = JSON.parse(value);
 try{
  while(value[i]['new_cases']>=0){
    if(value[i]['new_cases']>=1){
  dateCases.push(value[i]['date']);
    }
  ++i;
  }
}catch(error){
  console.log(error);
}
try{
  while(value[j]['new_cases']>=0){
    if(value[j]['new_cases']>=1){
  DailyCases.push(value[j]['new_cases']);
    }
  ++j;
  }
}catch(error){
  console.log(error);
}
//  try{
            
//   while(dataValue['PAK']['data'][i]['new_cases']>=0){
//     if(dataValue['PAK']['data'][i]['new_cases']>=0 && dataValue['PAK']['data'][i]['new_cases']!==undefined)
//     DailyCases.push(dataValue['PAK']['data'][i]['new_cases']);
//      ++i;
//       }

//     }catch(error){
//         console.log(error);
// //     }
// try{
//   while(dataValue['PAK']['data'][i]['new_cases']>=0){
//   if(dataValue['PAK']['data'][i]['new_cases']>0 ){
//   DailyCases.push(dataValue['PAK']['data'][i]['new_cases']);
//   console.log(DailyCases);
//   }
//   ++i;
//   }
//   draw();
// }catch(error){
//   console.log(error);
// }
  startDate = new Date(dateCases[0]);
   labels = [];
  for (let i = 0; i < dateCases.length; i++) {
     date = moment(startDate)
      .add(i, "days")
      .format("YYYY-MM-DD");
    labels.push(date.toString());
  }
  datas = [];
  for (let i = 0; i < DailyCases.length; i++) {
    datas.push(DailyCases[i]);
  }
  options = {
    maintainAspectRatio: false,
          showScale:true,
          title:{
            display :true,
            pointDot:true,
            text:'COVID 19 Chart',
            fontSize:50,
          },
          legend:{
            display:true,
          labels:{
            fontSize:50,
            padding:10,
          }
          },
        scales:{
          
                
      
          // scaleStepWidth:50,
          // scaleSteps:5,
          // scaleOverride:true,
          // scaleStartValue:0,
          yAxes:[{

            display:true,
            labelString:'Number of Cases',
            ticks:{
              min:1,
            
            }
          }],
          xAxes:[{
            
            ticks:{
          //     scaleStepWidth:50,
          // scaleSteps:5,
          // scaleOverride:true,
          // scaleStartValue:0,
          //     stepSize:1,
              min:1,
            maxTicksLimit:30,
            
            }
          }],
        }
          }
  
  chartData = canvas => {
    ctx = canvas.getContext("2d");
    gradient = ctx.createLinearGradient(0, 0, 100, 0);
    return {
      backgroundColor: gradient,
      labels,
      datasets: [
        {
          color:'#4D5360',
          highlight:'#616774',
          

          label: "# of Cases",
          data: datas,
          borderWidth: 3,
          fill: true,
          pointBorderWidth:5,
          //pointHitRadius:50,
          hoverBorderColor:'black',
          //pointHoverBorderdWidth:50,
          pointHoverRadius:50,
          borderColor: "red",
                   
        }
      ]
     
    };
  };
  
// render(
//  <div><Line data={chartData} /></div>
//  );

//  componentDidMount() {
//    const { datasets } = this.refs.chart.chartInstance.data
//    console.log(datasets[0].data);
//  }
                            
return (
  <div class="container">
    <div class="row">
      <div class="col-md-6">
  <Line data={chartData} options={options} width={400}
  height={450} />
  </div>
  </div>
  </div>
  );
}
export default Chart;