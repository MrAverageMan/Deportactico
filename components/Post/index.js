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
  //console.log(video[0].fields.file.url);

// const contentful = require('contentful');

// var client = contentful.createClient({
//   space: '5osaf52xnby0',
//   accessToken: 'Vx5lwSp2ENklrf3SBwpEd1y0LNIA4z7_Z94O2roZCSk'
// })
// if (!articles) {
//   return "Loading...";
// }
// //var imageURL = 'https:';
// useEffect(() => {
//   client.getEntry({slug})
//   .then(function (entry) {
//     // logs the entry metadata
//     setArticles(entry.fields);
//   });
// }, []);
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

// export async function getServerSideProps({ res, params }) {
//     const { slug } = params;
//     const data = slug;
//     return { props: {slug} }
//   }

//   const query = `
//   {
//     articleCollection{
//       items{
//         sys {
//           id
//         }
//         title
//         slug
//         description
//         content
        
//         videoCollection{
//           items {
//             title
//             description
//             contentType
//             fileName
//             size
//             url
//             width
//             height
//           }
//         }
//       }
//     }
//   }
//   `
