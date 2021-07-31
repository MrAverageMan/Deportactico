import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import {StatsTable} from '../components'
import { Layout } from '../containers';

 const Stats = () => {
const [stats, setStats] = useState([]);

    const getData=()=>{
        fetch('stats.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            //console.log(myJson);
            setStats(myJson.Players); 
          });
      }
      useEffect(()=>{
        getData();
      },[])
      //console.log(stats);
return (
    <>
      <Head>
        <title>Deportactico</title>
        <meta name="description" content="Deportactico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <StatsTable />
      </Layout>
    </>
  )
}
export default Stats;