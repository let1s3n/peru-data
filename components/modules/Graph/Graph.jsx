import dynamic from 'next/dynamic';
import React, { useState } from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const Graph = ({ title, data, type }) => {

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

    return (
        <>
            <h1 className="title">{title}</h1>
            <div className="d-flex my-4 justify-content-center">
                <Chart
                    options={dataSample.options}
                    series={dataSample.series}
                    type={type}
                    width="800"
                    height="400"
                />
            </div>
        </>
    )
}

export default Graph