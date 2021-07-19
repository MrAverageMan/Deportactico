import React, { useEffect, useState } from 'react';
import { Container,
    PosContainer,
    Hero
 } from './styled'
 import { Articles } from '../../components';

const Main = () => {
  const [articles, setArticles] = useState([null]);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/5osaf52xnby0/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer Vx5lwSp2ENklrf3SBwpEd1y0LNIA4z7_Z94O2roZCSk",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        // rerender the entire component with new data
        //setPage(data.articleCollection.items);
        setArticles(data.articleCollection.items);
      });
  }, []);

  if (!articles) {
    return "Loading...";
  }
  //console.log(articles);

    return (
        <Container>
          {!articles ? ( 
            <>
              <p>Empeza a atrabajar</p>
              <p>je</p>
              </>
             ):(
               <>
               <Hero />
               {articles.map((article, i) => 
                <Articles data={article}/>
              )}
               </>
             )}
        </Container>
    )
}

export default Main;


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
}
`