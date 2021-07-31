import React, { useEffect, useState } from 'react';
import { Container,
    Table } from './styled'

const Footer = () => {
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
    return (
        <Container>
              {stats ? ( 
             <>
             {stats.map((player, i) => 
              <Table key={i}>
                  <tr>
                    <th>Name</th>
                    <th>MIN</th>
                    <th>FGM</th>
                    <th>FGP</th>
                    <th>FGA</th>
                    <th>TPM</th>
                    <th>TPA</th>
                    <th>TPP</th>
                    <th>FTM</th>
                    <th>FTA</th>
                    <th>FTP</th>
                    <th>OREB</th>
                    <th>DREB</th>
                    <th>REB</th>
                    <th>AST</th>
                    <th>STL</th>
                    <th>BLK</th>
                    <th>TO</th>
                    <th>PF</th>
                    <th>PTS</th>
                    <th>PLUSMINUS</th>
                </tr>
                <tr>
                    <td>{player.name}</td>
                    <td>{player.MIN}</td>
                    <td>{player.FGM}</td>
                    <td>{player.FGP}</td>
                    <td>{player.FGA}</td>
                    <td>{player.TPM}</td>
                    <td>{player.TPA}</td>
                    <td>{player.TPP}</td>
                    <td>{player.FTM}</td>
                    <td>{player.FTA}</td>
                    <td>{player.FTP}</td>
                    <td>{player.OREB}</td>
                    <td>{player.DREB}</td>
                    <td>{player.REB}</td>
                    <td>{player.AST}</td>
                    <td>{player.STL}</td>
                    <td>{player.BLK}</td>
                    <td>{player.TO}</td>
                    <td>{player.PF}</td>
                    <td>{player.PTS}</td>
                    <td>{player.PLUSMINUS}</td>
                </tr>
              </Table>
            )}
             </>
             ):(
              
               <>
               <p>Empeza a atrabajar</p>
               <p>je</p>
               </>
             )}
        </Container>
    )
}

export default Footer