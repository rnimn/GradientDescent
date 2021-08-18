import React from 'react'
import { Line } from 'react-chartjs-2'


export const LossByIteration = ({loss}) => {
    const x = loss.map((value, index) => index)

    const data = {
        labels: x,
        borderColor: 'rba(255,255,255)',
        color: 'rba(255,255,255)',
        datasets: [{
            label: 'Loss by Iteration',
            data: loss,
            color: 'rgba(255, 255, 255)',
            backgroundColor: 'rgba(255, 255, 255)',
            borderColor: 'rgb(255,255,255)',
        }],
        options: {
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                borderColor: 'rgb(255,255,255)',
                display: true,
            }]
            },
        }
    }

    return (
        <>
            <Line 
                id="LossByIteration"
                data={data}
            />
        </>
    )
}

export default LossByIteration