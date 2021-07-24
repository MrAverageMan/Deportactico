import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:initial;
    width:100%;
    height:100%;
    margin:0 auto;
    padding:0;
    background-color: #FFF;
    margin: 0;
`
export const Article = styled.div`
width:90%;
height:100%;
margin:0 auto;
padding:0;
background-color: #000;
color:red;
.img-container{
    width:90%;
    height:60%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    img{
        width: 90%;
    }
}
h1,p{
        width: 90%;
        margin: 0 auto;
        padding: 1rem 0 0 0;
    }
h1{
    font-size: 1.3rem;
}
`