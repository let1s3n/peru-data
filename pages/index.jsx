import Head from 'next/head';
import React from 'react';
import Home from '../components/templates/Home/Home';

const index = ({ data }) => {
  return (
    <>
      <Head>
        <title>Peru Data</title>
      </Head>
      <Home data={data} />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BCRP}PM05373BA/json`)

  const data = await res.text()


  console.log("DATA:", data)
  return {
    props: {
      data,
    },
  }


}

export default index;
