import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Post from '../../components/Post';
import { Layout } from '../../containers';

 const Article = ({slug, props}) => {
  const [articles, setArticles] = useState([null]);
  
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
  return (
    <>
      <Head>
        <title>New post</title>
        <meta name="description" content="Sports blog platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <Post articles={articles}/>
      </Layout>
    </>
  )
}
export default Article;


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
