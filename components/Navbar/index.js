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
                <li>
                    <a href="/team">
                        <img src="./assets/magnifying-glass.svg" alt="Search Icon" />
                    </a>
                </li>
                <li>
                    <a href="/team">
                        <img src="./assets/notification.png" alt="Notification Icon" />
                    </a>
                </li>
                <li className="roundedSector">
                    <a href="/new-post">
                        Upload
                    </a>
                </li>
                <li className="profleSection">
                    <a href="/team">
                        <img src="./assets/profile.jpg" alt="Profile" /> 
                    </a>
                </li>
            </ul>
        </Container>
    )
}
export default Navbar