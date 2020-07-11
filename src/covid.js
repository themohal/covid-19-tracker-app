import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from './chart';
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
              

        <div class="row text-center">
        <div class="col-sm-3 ">
            <div class="card-body ">
                
                <h5 className="card-title mt-3 text-warning text-justify"><div className="customFont">{infected} INFECTED</div></h5>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card-body ">
  <h5 class="card-title mt-3 text-info text-justify" ><div className="customFont">{tested} TESTED</div></h5>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card-body ">
                <h5 class="card-title mt-3 text-success text-justify"><div className="customFont">{recovered} RECOVERED</div></h5>
            </div>
        </div>
   
        <div class="col-sm-3">
            <div class="card-body">
                <h5 class="card-title mt-3 ml-2 text-danger text-justify"><div className="customFont">{deceased} DEATHS</div></h5>
            </div>
        </div>
       </div>
    </div>
{/* <img src="http://placehold.it/100x100/ "  />
    <div><h3>INFECTED</h3></div> */}
    
  
            <div><Chart/></div>




<div class="container">
    <div class="row">
  
      <div class="col-md-6">
        <p>Covid Modules Stats</p>

<div class="bingwidget" data-type="covid19_modules" data-modules='[{"_type": "stats", "location-id":"/Pakistan"}, {"_type": "stats", "location-id":"/China"}, {"_type": "stats", "location-id":"/India"}]'></div>

      </div>
  
      <div class="col-md-6">
      <p>Covid Modules Trends</p>
<div class="bingwidget" data-type="covid19_modules" data-modules='[{"_type": "trends", "location-id":"/Pakistan"}]'></div>


      </div>
  
    </div>
    </div>

    


    </div>
    
);
}
export default Covid;