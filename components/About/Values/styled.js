import styled from 'styled-components'

export const Container = styled.div`
     width:80%;
     height: 100%;
     padding-left: 10%;
     .contenedor{
        display: grid;
        grid-template-rows: 50% 50%;
        grid-template-columns: 50% 50%;
     }
`
export const ValueContainer = styled.div`
width: 90%;
height: 90%;
background-color: red;
display: flex;
flex-direction: column;
`