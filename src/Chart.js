import React from 'react'
import LossByIteration from './Charts/LossByIteration'
import DataPlot from './Charts/DataPlot'

function Chart({chartName, chartData}) {
    const getChartByName = (name) => {
        if (name === "LossByIteration"){
            return (<LossByIteration loss={chartData.lossByIteration}/>)
        } else if (name === "DataPlot") {
            return (<DataPlot bestFit={chartData.dataPlot} data={chartData.data}/>)
        }
    }

    return (
        <>
            {getChartByName(chartName)}
        </>
    )
}

export default Chart
