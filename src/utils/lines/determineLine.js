import lineWrappers from './lineWrappers'
const parser = new DOMParser()

function determineLine(line){
    if (!line.startsWith("<")){
        return "action"
    }
    else if (line.startsWith("<") && line.endsWith(">")){
        const w = lineWrappers
        const h = parser.parseFromString(line, 'text/html')
        const c = h.body.firstChild.className

        return "needs to determine wrapper"
    }
}

export default determineLine