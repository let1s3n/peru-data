import React, { useState } from 'react';
import Graph from '../../modules/Graph/Graph';
const Graficos = ({ data }) => {

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

        <Graph title={data.config.title} graphData={dataSample} type={"line"} />

    )
}

export default Graficos