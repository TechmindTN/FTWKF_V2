
import React , {useEffect,useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';

import { PageTrafficTable, RankingTable } from "../../components/Tables";
import axios from 'axios';
const ATHLETE_URL='athlete/?format=json'

function Athletes (){
const[datas,setData]=useState('');

  
  const[id,setId]=useState([])
  useEffect(() => {
    fetch(`https://ab76-102-156-25-194.eu.ngrok.io/api/athlete/`,{
      headers: {'Content-Type': 'application/x-www-form-urlencoded','Authentication':'BEARER 7d724f4762ff08ebbf6aa9a8534ef4c737c1f9462b9acf43b2b108ade86c90d5',  'Access-Control-Allow-Methods': 'Accept'},
      withCredentials: false
   })
   .then(async (response) => {
      
    const data = await response.json();
    const arr=data[0]
    console.log(arr)
    setData(arr)
       })
  }, []);
 
// useEffect(()=> {
  
// })
  
//   axios.get('https://cc3d-197-0-144-55.eu.ngrok.io/api/athlete/?format=json',
//      {mode:'cors'},
//       {
//         headers: {'Authentication':'BEARER ',  'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Methods': 'Accept'},
//         withCredentials: false
//       }
//    ).then((value) => {
//     setId(value.data)
//      const id=value.data.map(item => item.id)
//     const first_name=value.data.map(item => item.first_name)

   

//     },[]);
 
  
  
  
  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Tables</Breadcrumb.Item>
            <Breadcrumb.Item active>Athletes</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Liste des athletes</h4>

       </div>
      </div>
      { <PageTrafficTable /> }
    </>
  );
};
export default (Athletes);
