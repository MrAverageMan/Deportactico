import React from 'react'
import { Container,
    TextContainer,
    Wrapper
} from './styled'

const Us = () => {
    return (

        <Container>
            <Wrapper>
                <TextContainer>
                    <h2>Nosotros</h2>
                    <p>Somos una red social de fútbol que conecta Jugadores, intermediarios e instituciones de todo el mundo, con el fin de potenciar su creciminento de una manera fácil, rápida y económica. Cada uno está al mando de su futuro completando su perfil y ampliando su red de contactos.</p>
                    <p>Somos una red social de fútbol que conecta Jugadores, intermediarios e instituciones de todo el mundo, con el fin de potenciar su creciminento de una manera fácil, rápida y económica. Cada uno está al mando de su futuro completando su perfil y ampliando su red de contactos.</p>
                </TextContainer>
            </Wrapper>
            <div className="about-img-container">
                <img src="./Assets/about-img.jpeg"/>
            </div>
        </Container>
    )
}

export default Us;