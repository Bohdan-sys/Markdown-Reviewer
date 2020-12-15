import React, { useState, useEffect } from 'react';
import TopPanel from './TopPanel'
import instruction from './instruction'

const Editor = ({ addText }) => {
    const [text, setText] = useState(instruction)
    const [screen, setScreen] = useState(true)

    const fullScreen = () => {
        setScreen(!screen)
    }
    useEffect(() => {
        addText(text)
    }

    )
    const handleTextChange = (e) => {
        setText(e.target.value)
        addText(e.target.value)
    }

    return (
        <div className={`editor ${screen ? '' : 'is-active'}`}>
            <TopPanel heading="Editor" toggleFullScreen={fullScreen.bind(this)} />
            <div>
                <textarea name="editor" id="editor" placeholder="Enter your code here..." value={text} className={`editor__text ${screen ? '' : 'is-active'}`}
                    onChange={handleTextChange.bind(this)}
                >
                </textarea>
            </div>
        </div>
    )

}


export default Editor