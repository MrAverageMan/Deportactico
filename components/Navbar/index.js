import React from 'react'
import {Container} from './styled'

const Navbar = () => {
    return(
        <Container>
            <h1>
                <a href="./">
                <img src="#" alt="Logo" />
                </a>
            </h1>
            <ul>
                <li><a href="./about">Nosotros</a></li>
                <li><a href="./contact">Contacto</a></li>
            </ul>
        </Container>
    )
}
export default Navbar