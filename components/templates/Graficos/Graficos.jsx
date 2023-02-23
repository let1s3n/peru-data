import React from 'react';
import Graph from '../../modules/Graph/Graph';
const Graficos = ({ dataset }) => {


    return (
        <>
            <Graph title={dataset.pbiData.config.title} data={dataset.pbiData} type="line" />

            <Graph title={dataset.produccionOroData.config.title} data={dataset.produccionOroData} type="bar" />

        </>

    )
}

export default Graficos