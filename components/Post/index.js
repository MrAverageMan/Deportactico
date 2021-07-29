import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Container
 } from './styled'
//export default function NewPost({slug,}) {
 const Post = ({articles}) => {
// const [articles, setArticles] = useState([null]);
  const {
    title,
    content,
    video
  } = articles;

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
               <h1>{title}</h1>
                <p>{content}</p>
                {video ? (
                  <video muted="" autoplay="" playsinline="" loop="">
                    <source src={'https:' + video[0].fields.file.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                ) :(
                  <p>no hay video</p>
                )}
                
                </> 
             )}
      </Container>
    </>
  )
}
export default Post;
