import React from 'react'
import { Scatter } from 'react-chartjs-2'
import { row, column, matrix, transpose, multiply }  from 'mathjs'

export const DataPlot = ({bestFit, data}) => {

    //Get linear X feature and Y values
    const fixedX = Array.from(column(data[0], 1)).map(obj => obj.value)
    const fixedY = Array.from(data[1]).map(obj => obj.value)

    const xData = data[0]


    const thetaValues = transpose(matrix(bestFit))
    const bestFitY = fixedX.map((features, index) => {
        var calculatedValue =  multiply(row(xData, index), thetaValues).get([0])
        return(calculatedValue)
    })

    const chartData = {
        labels: fixedX,
        datasets: [{
            type: 'scatter',
            label: 'Data to Fit',
            data: fixedY,
            backgroundColor: 'rgba(255, 255, 255)'
        }, {
            type: 'line',
            label: 'Best Fit Line',
            data: bestFitY,
            backgroundColor: 'rgb(54, 162, 235)'
        }],
        
    }

    return (
        <>
            <Scatter id = "DataPlot" data={chartData}/>
        </>
    )
}

export default DataPlot
