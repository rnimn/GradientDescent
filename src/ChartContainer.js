import React from 'react'
import Chart from './Chart'
import './App.css'
import { useState } from 'react'
const allCharts = ["LossByIteration", "DataPlot"]

export default function ChartContainer({chartData}) {
    
    const [focus, setFocus] = useState("LossByIteration")
    const [unfocusedCharts, setUnfocusedCharts] = useState(allCharts.filter((chartName)=>(chartName !== focus)))
    const focusOnChart = (e, name) => {
        e.preventDefault()
        setFocus((focus) => {return (name)})
        setUnfocusedCharts(allCharts.filter((chartName)=>(chartName !== name)))
    }

    return (
        <div className="ChartContainer">
            <div className="FocusedChart">
                {<Chart 
                chartName={focus} 
                chartData={chartData}
                className="Chart"/>}
            </div>
            <div className="UnfocusedCharts">
                {unfocusedCharts.map((chartName) => {
                    return(
                    <div  key={chartName} onClick={(e) => focusOnChart(e, chartName)} name={chartName}>
                        <Chart 
                        chartName={chartName}
                        chartData = {chartData}
                        className="Chart"/>
                    </div>)
                })}
            </div>
        </div>
    )
}
