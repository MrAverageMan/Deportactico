import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    height:fit-content;
    margin:0 auto;
    padding:0;
    background-color: #FFF;
    width:100%;
    padding: 0 5rem;
    .textContainer{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:space-around;
        height:fit-content;
        .optionsContainer{
            width: 5%;
            img{
                width: 50%;
            }
        }
        p{
        width: 100%;
        border: 0;
        color: gray; 
        }
        .show{
            width: 5%;
            img{
                width: 50%;
            }
        }
        .hidden{
            display: none;
        }
    }
`