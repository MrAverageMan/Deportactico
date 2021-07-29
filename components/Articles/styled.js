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
width:100%;
height:100%;
margin:0 auto;
padding:0;
color:gray;
display: flex;
flex-direction: column;
align-items: center;
.img-container{
    width:90%;
    height:60%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    img{
        width: 100%;
    }
}
h1,p{
        width: 100%;
        padding: 1rem 0 0 0;
        text-align: center;
    }
h1{
    font-size: 1.3rem;
}
a{
    font-weight: 800;
}
`