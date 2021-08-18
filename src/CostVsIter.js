import React from 'react'
import { Line } from 'react-chartjs-2'


export const CostVsIter = ({cost}) => {
    
    const x = cost.map((index) => index)

    // steps.map((dataPoint, index) => {
    //     x.push(index)
    //     y.push(CalculateCost(dataPoint))
    //     return(dataPoint)
    // })

    const data = {
        labels: x,
        datasets: [{
            label: 'Iteration vs. Cost',
            data: cost
        }]
    }

    return (
        <>
            <Line 
                id="CostVsIter"
                data={data}
            />
        </>
    )
}

export default CostVsIter