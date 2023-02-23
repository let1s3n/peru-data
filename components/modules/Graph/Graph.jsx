import dynamic from 'next/dynamic';
import React from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const Graph = ({ title, graphData, type }) => {
    return (
        <>
            <h1 className="title">{title}</h1>
            <div className="d-flex my-4 justify-content-center">
                <Chart
                    options={graphData.options}
                    series={graphData.series}
                    type={type}
                    width="800"
                    height="400"
                />
            </div>
        </>
    )
}

export default Graph