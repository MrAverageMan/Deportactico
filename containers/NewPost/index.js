import React, { useContext, useEffect, useState } from 'react';
import { TitleComponent, ParagrafComponent} from '../../components/NewPostSteps';
import { ContainerBody } from './styled';

const NewPost = () => {
  return ( 
    <ContainerBody>
        <TitleComponent />
        <ParagrafComponent />
    </ContainerBody>
  );
}

export default NewPost;