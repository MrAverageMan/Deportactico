import React from 'react';
import {Container} from './styled';

const Articles = ({data}) => {
    console.log(data);
    return(
            <Container>
                {!data ? ( 
              <p>informaicon de los posteos</p>
             ):(
               <>
                <p>{data.title}</p> 
               </>
             )}
            </Container>
    )
}
export default Articles;

const query = `
{
  articleCollection{
    items{
      title
      slug
      description
      content
    }
  }
}
`