import React, { useContext, useEffect, useState } from 'react';
import { TitleComponent, ParagrafComponent} from '../../components/NewPostSteps';
import { ContainerBody } from './styled';

const NewPost = () => {
  const  state  = useAppContext();
  return ( 
    <ContainerBody>
        <TitleComponent />
        <ParagrafComponent />
    </ContainerBody>
  );
}

export default NewPost;