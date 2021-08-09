import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100%;
    height:fit-content;
    margin:0 auto;
    padding:0;
    background-color: #FFF;
    align-items: flex-start;

`

export const Wrapper = styled.div`
display: flex;
height: 100%;
.about-img-container{
    flex-basis: 50%;
    width: 100%;
    height: fit-content;
    img{
        max-height: 50vh;
        height: 50%;
        }
    }
`

export const TextContainer = styled.div`
flex-basis: 50%;
width: 100%;
align-items: baseline;
justify-content: baseline;
height: 100%;
h2{
    font-size: 3rem;
    padding: 1% 2rem;
}
p{
    padding: 10% 2rem;
}
`