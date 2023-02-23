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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BCRP}PM05373BA/json/2010/2021`)

  const res2 = await res.text()


  const data = JSON.parse(res2.replace("Notice: Undefined offset: 1 in /srv/www/htdocs/estadisticas/application/views/scripts/api/index.phtml on line 1972", ""))


  console.log("DATA:", data)

  return {
    props: {
      data,
    },
  }


}

export default index;
