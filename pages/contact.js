import Head from 'next/head';
import {Layout} from '../containers';
import {Main} from '../components'
import React, { useContext, useEffect, useState } from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sports blog platform</title>
        <meta name="description" content="Sports blog platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Main/>
      </Layout>
    </>
  )}
