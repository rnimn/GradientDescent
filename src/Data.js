import {matrix, randomInt, random} from 'mathjs'



export const getLinearData = () => {

    const slope = 1
    const randX = Array(100).fill(0).map((aY, index) => ([1, index]))
    const randY = Array(100).fill(0).map((aX, index) => {

        var upperBound = 0;
        var lowerBound = 0;
        if ((slope * index) + 25 < 100){
            upperBound = (slope * index) + 25;
        } else { upperBound = 100}

        if ((slope * index) - 25 > 0){
            lowerBound = (slope * index) - 25;
        } else { lowerBound = 0}

        var ry = randomInt(upperBound, lowerBound)
        
        return(ry)
    })
    return ([matrix(randX), matrix(randY)])
}

export const getQuadraticData = () => {

    const a = 0.5;
    const b = 0.25;
    const randX = Array(100).fill(0).map((aY, index) => ([1, index, index * index]))
    const randY = Array(100).fill(0).map((aX, index) => {

        var upperBound = 0;
        var lowerBound = 0;
        var evaluated = (a * (index * index)) + (b * index)

        console.log(evaluated)

        if (evaluated + 25 < 100){
            console.log("OK WITH UPPER")
            upperBound = evaluated + 25;
        } else { 
            upperBound = 100
        }

        if (evaluated - 25 > 0){
            console.log("OK WITH LOWER")
            lowerBound = evaluated - 25;
        } else { 
            lowerBound = 0
        }

        var ry = randomInt(upperBound, Math.min(lowerBound, 100))
        
        return(ry)
    })


    return ([matrix(randX), matrix(randY)])
}

//export const X = matrix(randX)

//export const y = matrix(randY)