import styled from 'styled-components'

export const Container = styled.footer`
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100%;
    height:5vh;
    margin:0 auto;
    padding:0;
    background-color: #FFF;
   p{
       color:#CCCCCC;
       font-size:8px;
   }
   @media (min-width: 425px) {
    p{
       color:#CCCCCC;
       font-size:12px;
    }
   }
   @media (min-width: 768px) {
    p{
       color:#CCCCCC;
       font-size:18px;
    }
   }
`