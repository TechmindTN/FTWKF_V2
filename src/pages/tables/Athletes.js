
import React , {useEffect,useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';

import { PageTrafficTable, RankingTable } from "../../components/Tables";
import axios from "../examples/api/axios";
const ATHLETE_URL='athlete/'

const Athletes = ()=> {
 
    axios.get(ATHLETE_URL,
    {
       headers: {'Authentication':'TOKEN ','Content-Type':'application/json','Access-Control-Allow-Methods': 'Accept'},
       withCredentials: false
    },
    // {mode:'cors'}
    )
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
      console.log('persons')
    })
  
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
      <PageTrafficTable />
    </>
  );
};
export default (Athletes);
