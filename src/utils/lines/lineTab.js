import lineOptions from './lineOptions'
import determineLine from './determineLine'

export function lineTab(activeLine, num){

    let line = activeLine

    let lineType = determineLine(line)
    console.log(lineType)

    let currentType = lineOptions.indexOf(lineType)
    if (currentType === lineOptions.length - 1){
        currentType = 0
    }
    else {
        currentType += 1
    }

    console.log(lineOptions[currentType])

    return line
}