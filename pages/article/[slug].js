import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Post from '../../components/Post';
import { Layout } from '../../containers';

 const Article = ({slug, props}) => {
  return (
    <>
      <Head>
        <title>New post</title>
        <meta name="description" content="Sports blog platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <Post/>
      </Layout>
    </>
  )
}
export default Article;
