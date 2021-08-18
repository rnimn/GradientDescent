import { useState, useEffect } from "react";
// import CostVsIter from "./CostVsIter";
// import DataPlot from "./DataPlot"
import ChartContainer from "./ChartContainer"
import Info from "./Info"
import { CalculateNextThetas, CalculateCost }  from "./GradientDescent"
import { getLinearData, getQuadraticData} from "./Data.js";
import './App.css';


function App() {

  //Algorithm to show
  const [algorithm, setAlgorithm] = useState("Gradient Descent")
  //Data to fit
  const [data, setData] = useState(getLinearData())
  //List of calculated thetas
  const [thetas, setThetas] = useState([null, [0, 0]])
  //List of loss
  const [loss, setLoss] = useState([0, 0])
  //Current theta shown
  const [currentTheta, setCurrentTheta] = useState(1)
  //Information to be displayed
  const [information, setInformation] = useState({
    function: "0 + 0x",
    theta: [0, 0],
    dLoss: 0,
    alpha: 0.0005,
  })
  //Data for all charts
  const [chartData, setChartData] = useState({
    data: data,
    lossByIteration: loss,
    dataPlot: [0, 0],
  })

  const lastTheta = () => {
    if (thetas[currentTheta - 1] === null){
      console.log('Cant iterate back further')
    } else {
      setCurrentTheta(currentTheta - 1)
    }
  }

  const nextTheta = () => {
    if (currentTheta + 1 === thetas.length){
      setThetas([...thetas, CalculateNextThetas(thetas[currentTheta], information.alpha, data[0], data[1])])
      setLoss([...loss, CalculateCost(thetas[currentTheta], data[0], data[1])])
    }
    setCurrentTheta(currentTheta + 1)
  }

  useEffect(() => {
    setChartData({

      data: data,
      lossByIteration: loss,
      dataPlot: thetas[currentTheta],
      
    })
  }, [data, loss, thetas])



  const updateDataShape = (e, shape) => {

    e.preventDefault()

    if (shape === "Linear"){
      console.log("setting linear data")
      setData(getLinearData())
      
      setThetas([null, [0, 0]])
      setCurrentTheta(1)
      setLoss([0, 0])

      setInformation({...information, alpha: 0.0005})

    } else if (shape === "Quadratic"){
      setData(getQuadraticData())

      setThetas([null, [0, 0, 0]])
      setCurrentTheta(1)
      setLoss([0, 0])

      setInformation({...information, alpha: 0.00000006})
    }
  }

  return (
    <>

      <div className="DropdownContainer">

        <button onClick={(e) => updateDataShape(e, "Linear")}>Linear</button>
        <button onClick={(e) => updateDataShape(e, "Quadratic")}>Quadratic</button>

      </div>

      <ChartContainer chartData={chartData}/>

      <div className="IterationContainer">
         <button onClick={()=>lastTheta()}>←</button>
            <p>{(String(currentTheta - 1) + ' / ' + String(thetas.length - 2))}</p>
         <button onClick={()=>nextTheta()}>→</button>
       </div>

    </>
  )
  
}

export default App;