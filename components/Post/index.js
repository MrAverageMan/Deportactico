import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Container
 } from './styled'
//export default function NewPost({slug,}) {
 const Post = ({slug, props}) => {
const [articles, setArticles] = useState([null]);
//console.log(articles.video[0].fields.file.url)

const contentful = require('contentful');

var client = contentful.createClient({
  space: '5osaf52xnby0',
  accessToken: 'Vx5lwSp2ENklrf3SBwpEd1y0LNIA4z7_Z94O2roZCSk'
})
if (!articles) {
  return "Loading...";
}
//var imageURL = 'https:';
useEffect(() => {
  client.getEntry({slug})
  .then(function (entry) {
    // logs the entry metadata
    setArticles(entry.fields);
  });
}, []);
//var imageURL = 'https:' + articles.video[0].fields.file.url;

  return (
    <>
      <Head>
        <title>New post</title>
        <meta name="description" content="Sports blog platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
      {!articles ? ( 
              <p>Seguimos cargando</p>
             ):(
                 <>
                <h1>{articles.title}</h1>
                <p>{articles.content}</p>
                <video muted="" autoplay="" playsinline="" loop="">
                    <source src={'https:' + articles.video[0].fields.file.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </>
             )}
      </Container>
    </>
  )
}
export default Post;

export async function getServerSideProps({ res, params }) {
    const { slug } = params;
    const data = slug;
    return { props: {slug} }
  }

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
