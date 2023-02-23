import Head from 'next/head';
import React from 'react';
import Home from '../components/templates/Home/Home';

const index = () => {
  return (
    <>
      <Head>
        <title>Peru Data</title>
      </Head>
      <Home />
    </>
  );
};



export default index;
