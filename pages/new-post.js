import Head from 'next/head';
import {Layout, NewPost as NewPostContainer} from '../containers';


export default function NewPost() {
  return (
    <>
      <Head>
        <title>New post</title>
        <meta name="description" content="Sports blog platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <NewPostContainer />
      </Layout>
    </>
  )
}
