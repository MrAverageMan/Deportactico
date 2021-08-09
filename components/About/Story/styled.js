import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-around;
    padding: 4rem 0;
    div{
        width: 50%;
        border: 3px solid black;
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:space-around;
        padding: 1rem 2rem;
    }
`
