import React from "react"
import {useState} from "react"
import {Form, FormGroup, FormControl} from "react-bootstrap"

import Rangy from "rangy"

import {lineTab} from "../../utils/lines/lineTab"
import { act } from "react-dom/test-utils"

const ScriptTextEdit = ({defaultValue, className, style}) => {

    let [text, setText] = useState('')
    let [lines, setLines] = useState({})
    let [activeLine, setActiveLine] = useState(0)
    let [selection, setSelection] = useState({})

    const updateTextHandler = (_id) => {
        try{
            setText(document.getElementById(_id).innerText)
            lines = text.split('\n')
            setLines(lines)
        } catch (e) {
            setText('')
            setLines({})
        }
    }

    const updateActiveLineHandler = (_id) => {
        activeLine = 0
        selection = Rangy.getSelection()

        if (selection._ranges[0]){

            let data = selection._ranges[0].startContainer.data
            let index = lines.indexOf(data)

            activeLine = index
        }

        setActiveLine(activeLine)
    }

    const keyHandler = (e) => {
        
        updateTextHandler(e.target.id)
        updateActiveLineHandler(e.target.id)

        if (e.keyCode === 9) {
            e.preventDefault()
            lineTab(lines[activeLine], activeLine)
        }
        else if (e.keyCode === 13){

        }

    }

    return (
        <Form className={className} style={style}>
            <FormGroup controlId="scriptText">
                <div contentEditable="true" onKeyDown={keyHandler} onKeyUp={keyHandler} id={'entry'}>
                    {defaultValue}
                </div>
            </FormGroup>
        </Form>
    )
}

export default ScriptTextEdit