import React, { useState } from 'react';
import { Container } from './styled'

function TitleComponent (){
    const [defaultValue, setDefaultValue] = useState('false');
    const [isWriting, setIsWriting] = useState('false');
    const [textValue, setTextValue] = useState('');


    const handleWriting = () =>{
    if(isWriting == "false") {
        console.log("escribiendo");
        var myobj = document.getElementById("defaultValue");
        myobj.remove();
        setIsWriting("true");
        }
    }
    return (
        <Container>
            <h3 
            contentEditable="true"
            onInput={handleWriting}
            onChange={setTextValue}
            >
              
                {textValue ? (
                   <span> {textValue}</span>
                ):
                    (
                    <span id="defaultValue" className="defaultValue">Elige un titulo</span>
                   )}
            </h3>
        </Container> 
    )
}

export default TitleComponent