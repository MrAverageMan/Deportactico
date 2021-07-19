import styled from 'styled-components'

export const Container = styled.div`
    display:grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-auto-rows: 60% 20rem;
    width:100%;
    height: 85vh;
    padding: 0 2%;
    background-color: #FFF;
    padding-top: 2rem;
    overflow:scroll;
`
export const PosContainer = styled.div`
width: 20%;
height: 20%;
background-color: red;
`

export const Hero = styled.div`
background-color: red;
grid-column-start: 1;
grid-column-end: five;
grid-row-start: row1-start;
grid-row-end: 1;
height: 90%;
padding: 2rem;
margin-bottom: 2rem;
`
