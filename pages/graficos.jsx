import Head from 'next/head';
import React from 'react';
import Graficos from '../components/templates/Graficos/Graficos';

const graficos = ({ pbiData, produccionOroData }) => {
    return (
        <>
            <Head>
                <title>Peru Data</title>
            </Head>
            <Graficos dataset={{ pbiData: pbiData, produccionOroData: produccionOroData }} />
        </>
    )
}

export async function getStaticProps() {
    const pbi = await fetch(`${process.env.NEXT_PUBLIC_API_BCRP}PM05373BA/json/2010/2021`)

    const pbi2 = await pbi.text()


    const pbiData = JSON.parse(pbi2.replace("Notice: Undefined offset: 1 in /srv/www/htdocs/estadisticas/application/views/scripts/api/index.phtml on line 1972", ""))


    const produccionOro = await fetch(`${process.env.NEXT_PUBLIC_API_BCRP}PM05149AA/json`)

    const produccionOro2 = await produccionOro.text()


    const produccionOroData = JSON.parse(produccionOro2.replace("Notice: Undefined offset: 1 in /srv/www/htdocs/estadisticas/application/views/scripts/api/index.phtml on line 1972", ""))

    return {
        props: {
            pbiData,
            produccionOroData
        },
    }
}

export default graficos