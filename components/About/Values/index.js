import React from 'react'
import { Container,
    ValueContainer
} from './styled'

const Values = () => {
    return (
        <Container>
            <h2>Our Values</h2>
            <div className="contenedor">
                <ValueContainer>
                    <h4>Value 1</h4>
                    <p>Value content</p>
                </ValueContainer>
                <ValueContainer>
                    <h4>Value 2</h4>
                    <p>Value content</p>
                </ValueContainer>
                <ValueContainer>
                    <h4>Value 3</h4>
                    <p>Value content</p>
                </ValueContainer>
                <ValueContainer>
                    <h4>Value 4</h4>
                    <p>Value content</p>
                </ValueContainer>
            </div>
        </Container>
    )
}

export default Values;