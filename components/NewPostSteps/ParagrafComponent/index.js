import React, { useState } from 'react';
import { Container } from './styled'

function ParagrafComponent (){
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

const showOptions = (value) =>{
    setTextValue(value);
    //console.log(textValue);
}
  
    return (
        <Container>
            <div className="textContainer">
            <div className={textValue === 'true' ? "hidden" : "show"}>
                    <img src="./assets/plusIcon.svg" alt="Plus icon" />
            </div>
                <p contentEditable="true"
                onInput={handleWriting}
                onChange={e => showOptions(e.currentTarget.value)}>
                <span id="defaultValue" className="defaultValue">Empieza a escribir</span>
                </p>
            </div>
        </Container> 
    )
}

export default ParagrafComponent