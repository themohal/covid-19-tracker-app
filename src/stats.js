import React,{useState,useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, tac, tc, td,tnct,tndt,tr, tsc,tu) {
  return { name, tac, tc, td,tnct,tndt,tr, tsc,tu };
}





const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

 function StatsTables() {


    let [statData,setStateData] = useState([]);

    
    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        async function getApiData(){
        const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL",requestOptions);
        const data  =  await response.json();
        setStateData(data.countryitems[0]);
      
        }
        getApiData();
    },[]);
    Object.keys(statData).forEach((key,index)=>{
        createData(statData[key]['title']);
        //CNames.push(statData[key]['title']);
    });

    
//     for(let i=1; i<=statData.length;i++){
//         CNames.push(statData['1'])
//     }

// console.log(CNames);

    // const rows =  [createData('aa', 159, 6.0, 24, 4.0,1,2,3,12),];
  const classes = useStyles();
 
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Country Name</StyledTableCell>
            <StyledTableCell align="right">Total Active Cases</StyledTableCell>
            <StyledTableCell align="right">Total Cases</StyledTableCell>
            <StyledTableCell align="right">Total Deaths</StyledTableCell>
            <StyledTableCell align="right">Total New Cases Today</StyledTableCell>
            <StyledTableCell align="right">Total New Deaths Today</StyledTableCell>
            <StyledTableCell align="right">Total Recovered</StyledTableCell>
            <StyledTableCell align="right">Total Serious Cases</StyledTableCell>
            <StyledTableCell align="right">Total Unresolved</StyledTableCell>



          </TableRow>
        </TableHead>
        <TableBody>
        {Object.keys(statData).map((key,index)=>(
          
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {statData[key].title}
              </StyledTableCell>
               <StyledTableCell align="right">{statData[key].total_active_cases}</StyledTableCell> 
               <StyledTableCell align="right">{statData[key].cases}</StyledTableCell>
              <StyledTableCell align="right">{statData[key].total_deaths}</StyledTableCell>
              <StyledTableCell align="right">{statData[key].total_new_cases_today}</StyledTableCell>
              <StyledTableCell align="right">{statData[key].total_new_deaths_today}</StyledTableCell>
              <StyledTableCell align="right">{statData[key].total_recovered}</StyledTableCell>
              <StyledTableCell align="right">{statData[key].total_serious_cases}</StyledTableCell>
              <StyledTableCell align="right">{statData[key].total_unresolved}</StyledTableCell> 



            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  
}
export default StatsTables;
