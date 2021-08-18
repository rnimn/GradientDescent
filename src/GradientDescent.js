import { matrix, multiply, subtract, square, size, sum, row } from 'mathjs'

export const CalculateNextThetas = (theta, alpha, X, y) => {

    if (theta === null){
        return
    }

    var sigma = new Array(theta.length)
    const m = size(y).get([0])
    const thetaM = matrix(theta)
    sigma.fill(null)

    console.log(y)

    sigma = sigma.map((item, index) => {

        var total = 0
        for (var i = 0; i < m; i++){

            // console.log("FEATURES: ", row(X, i))
            // console.log("THETA: ", thetaM)
            // console.log("FEATURES * THETA: ", multiply(row(X, i), thetaM).get([0]))
            // console.log("LABEL: ", y.get([i]))
            // console.log("CHAIN RULE: ", X.get([i, index]))


            total += (multiply(row(X, i), thetaM).get([0]) - y.get([i])) * X.get([i, index])
        }

        // console.log("TOTAL FOR THETA#", index, ": ", total)

        return(total * (alpha / m))
    })

    
    const sigmaM = matrix(sigma)

    console.log("THETA: ",Array.from(thetaM))
    console.log("SIGMA: ",Array.from(sigmaM))

    const nextTheta = subtract(thetaM, sigmaM)

    const arrTheta = Array.from(nextTheta).map((obj) => obj.value)
    console.log("FINAL: ",arrTheta)
    return(arrTheta)

}

export const CalculateCost = (theta, X, y) => {

    if (theta === null){
        return
    }

    theta = matrix(theta)

    const predictions = multiply(X, theta)
    const sqrErrors = square(subtract(predictions, y))
    const Cost = (1 / (2 * size(y).get([0]))) * sum(sqrErrors)

    return(Cost)

}