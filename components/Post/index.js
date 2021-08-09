import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Container,
  Content
 } from './styled'
//export default function NewPost({slug,}) {
 const Post = ({articles}) => {
// const [articles, setArticles] = useState([null]);
  const {
    title,
    content,
    video
  } = articles;
console.log(video);
  return (
    <>
      <Head>
        <title>New post</title>
        <meta name="description" content="Sports blog platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
       {!articles ? ( 
              <p>Loading...</p>
             ):(
                 <>
               <h1>{title}</h1>
                <Content>{content}</Content>
                {video ? (
                  <video muted="" autoplay="" playsinline="" loop="">
                    <source src={'https:' + video[0].fields.file.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                ) :(
                  <>
                  </>
                )}
                
                </> 
             )}
      </Container>
    </>
  )
}
export default Post;
