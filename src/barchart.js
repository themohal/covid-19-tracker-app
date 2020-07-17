import React,{useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
let Months =[];
let i= 0;
let monthA = 0;
let monthB = 0;
let monthC = 0;
let monthD = 0;
let monthE = 0;
let monthF = 0;
let monthCount = 5;
var monthName = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];
function BarChart(){
    let [value,setData] = useState([{}]);
    useEffect(()=>{
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
            async function getApiData(){
        const response = await fetch('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/owid-covid-data.json',requestOptions);
        const dataValue  =  await response.json();
        setData(dataValue['PAK']['data']);
        }
  
        getApiData();
      
    },[]);
    
    try{
        while(value[i]['total_cases']>=0){
          if(value[i]['total_cases']>=1){
            if(new Date(value[i]['date']).getMonth()===new Date().getMonth()-monthCount){
                
                if (monthCount===5){
                  monthA+=value[i]['new_cases'];
                }else if(monthCount===4){
                    monthB+=value[i]['new_cases'];
                } if (monthCount===5){
                    monthA+=value[i]['new_cases'];
                  }else if(monthCount===3){
                      monthC+=value[i]['new_cases'];
                  }else if(monthCount===2){
                    monthD+=value[i]['new_cases'];
                }else if(monthCount===1){
                    monthE+=value[i]['new_cases'];
                }
                else if(monthCount===0){
                    monthF+=value[i]['new_cases'];
                }
        Months.push(monthName[(new Date().getMonth()-monthCount)]);
            }else{
                monthCount = monthCount-1;
            }
          }
        ++i;
        }
      }catch(error){
        console.log(error);
      }

      console.log(Months)
      console.log(monthA);
      console.log(monthB);
      console.log(monthC);
      console.log(monthD);
      console.log(monthE);
      

    const data = {
        // ['January', 'February', 'March', 'April', 'May', 'June', 'July']
        labels: Array.from(new Set(Months)),
        datasets: [
          {
            label: 'Total New Cases By Month',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            // [65, 59, 80, 81, 56, 55, 40]
            data: [monthA,monthB,monthC,monthD,monthE,monthF]
          }
        ]
      };
      const options = {
          maintainAspectRatio: false,
          title:{
              display :true,
              text:'COVID 19 Bar Chart',
              fontSize:50,
            },
      };
return (
      <div>
        <div className="col-md-10">
        <Bar
          data={data}
          width={300}
          height={350}
          options= {options}
            
        />
        </div>
        
      </div>);
};

export default BarChart;