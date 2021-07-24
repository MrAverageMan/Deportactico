import styled from 'styled-components'

export const Container = styled.nav`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:10vh;
    margin:0 auto;
    padding:0;
    background-color: #FFF;
    h1{
        width: 100%;
        a{
        width: 100%;
        display:flex;
        justify-content:end;
        }
    }
    ul{
        display:flex;
        list-style:none;
        padding-right:5%;
        width: 30%;
        align-items: center;
        justify-content: center;
        li{
        list-style:none;
        width: 50%;
            a{
                color:#000;
                width: 100%;
                img{
                    width: 50%;
                }
            }
        }
        .roundedSector{
            width: 90%;
            border: 1px solid black;
            border-radius: 20px;
            padding: 0.3rem;
            a{
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        .profleSection{
            width: 60%;
            a{
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    border-radius: 50%;
                    width: 60%;
                }
            }
        }

    }
   
    @media (min-width: 425px) {
    h1{
        width: 100%;
        display:flex;
        justify-content:center;
    }
   
}
@media (min-width: 1024px) {
    h1{
        width: 100%;
        display:flex;
        justify-content:center;
    }
    img{
        width: 20%;
    }
}
`
