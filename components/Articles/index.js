import React from 'react';
import {Container,
  Article} from './styled';

const Articles = ({data}) => {
  if(data){
    console.log(data.videoCollection.items[1]);
  }

    //data.articleCollection.items[0].videoCollection.items.title 
    return(
            <Container>
                {!data ? ( 
              <p>Loading</p>
             ):(
               <Article>
                 <div className="img-container">
                 {data.videoCollection.items.title == "Portada" ? ( 
                  <p>url</p>
                 ):(
                  <img src="./Assets/article-default-portada.jpeg"/>
                 )}
                 </div>
                 <div>
                   <h1>{data.title}</h1> 
                   <p>{data.description}</p> 
                   <p>{data.videoCollection.items.fileName}</p>
                 </div>
                 <a href={`/article/${data.sys.id}`}>Seguir leyendo</a>
               </Article>
             )}
            </Container>
    )
}
export default Articles;

const query = `
{
  articleCollection{
    items{
      sys {
        id
      }
      title
      slug
      description
      content

      videoCollection{
        items {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
  }
  
  assetCollection {
    items {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
      sys {
        id
      }
    }
  }
}
`