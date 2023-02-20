import Head from 'next/head';
import React from 'react';
import Home from '../components/templates/Home/Home';

const index = () => {
  return (
    <>
      <Head>
        <title>SMRL Acumulación Los Rosales</title>
      </Head>
      <Home />
    </>
  );
};

export default index;
