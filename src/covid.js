import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Chart from './chart';
import BarChart from './barchart';
let infected;
let recovered;
let tested;
let deceased;



function Covid(){

    let [data,setData] = useState([{}]);
    useEffect(()=>{
        async function getApiData(){
        const response = await fetch('https://api.apify.com/v2/acts/cyberfly~covid-pk/runs/last/dataset/items?token=iPwSv872HFA3zyugqXNEirSfu');
        const data  =  await response.json();
        console.log(data);
        setData(data);
        }
        getApiData();
    },[]);

//         fetch('https://api.apify.com/v2/acts/cyberfly~covid-pk/runs/last/dataset/items?token=iPwSv872HFA3zyugqXNEirSfu')
//   .then(response => response.json())
//   .then(json => setData(json))//console.log(json))
    //  },[])
//     let [value,setValue] = useState([""]);
// async function fetchData() {
//   try{
//   let response = await fetch('https://api.apify.com/v2/acts/cyberfly~covid-pk/runs/last/dataset/items?token=iPwSv872HFA3zyugqXNEirSfu');
//   data  =  await response.json();
//   //setValue(data);
//   return data ;

//   }catch{
    
//   }
// }
// // let outside;
// // outside = fetchData().then( ( data ) => {
// //     console.log( data[0] );
// // });
 
// fetchData().then( ( data ) => {
//   infected = data[0]['infected'];
//   tested = data[0]['tested'];
//   recovered = data[0]['recovered'];
//   deceased = data[0]['deceased'];
    
// });
// console.log(infected);
//   console.log(tested);
//   console.log(recovered);
//   console.log(deceased); 
console.log(data[0]['infected']);
console.log(data[0]['tested']);
console.log(data[0]['recovered']);
console.log(data[0]['deceased']);
infected = data[0]['infected'];
tested = data[0]['tested'];
recovered = data[0]['recovered'];
deceased = data[0]['deceased'];


  return( 
    <div className="container mt-2 ">
        <div class="shadow p-1 mb-1 bg-white rounded">

                <div class="card-deck">
                    <div class="text-center card bg-warning text-white" >
                        <div class="card-body"><div class="card-title h5">Cases</div>
                        <span >{infected}</span>
                        </div>
                            </div>
                <div class="text-center card bg-info text-white" >
                    <div class="card-body"><div class="card-title h5">Tested</div>
                    <p class="card-text"> <span >{tested}</span></p></div>
                    </div>
                <div class="text-center card bg-success text-white" >
                    <div class="card-body"><div class="card-title h5">Recovered</div>
                    <p class="card-text"><span>{recovered}</span></p>
                        </div>
                        </div>
                    <div class="text-center card bg-danger text-white" >
                    <div class="card-body"><div class="card-title h5">Deaths</div>
                    <p class="card-text"><span>{deceased}</span></p>
                        </div>
                        </div>
                        </div>
              
 
      
      
    </div>
{/* <img src="http://placehold.it/100x100/ "  />
    <div><h3>INFECTED</h3></div> */}
    
  
            {/* <div><BarChart/></div> */}



    
<div class="container p-1">
<div class="shadow mb-1 bg-white rounded">

    <div class="row">
    
      <div class="col-lg">
    <Chart/>
    </div>    
    <div class="col-lg">
    <BarChart/>
    </div>
    </div>
    </div>
    </div>
    </div>

    
);
}
export default Covid;