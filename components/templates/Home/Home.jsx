import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Home = ({ data }) => {

  const [dataSample, setDataSample] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: data.periods.map(period => (period.name)),
      },
    },
    series: [
      {
        name: "series-1",
        data: data.periods.map(period => (parseInt(period.values[0]))),
      },
    ],
  });


  useEffect(() => {
    console.log("DATA: ", data)

  }, [data])


  return (

    <section className="main-container">
      <h1 className="title">Hola mundo</h1>
      <div className="d-flex my-4 justify-content-center">
        <Chart
          options={dataSample.options}
          series={dataSample.series}
          type="line"
          width="800"
          height="400"
        />
      </div>

    </section>


  );
};

export default Home;
