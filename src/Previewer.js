import React, { useState } from 'react';
// import parse from 'html-react-parser';
import TopPanel from './TopPanel';
import marked from 'marked'

const Previewer = ({ text }) => {
    const [screen, setScreen] = useState(true)
    const fullScreen = () => {
        setScreen(!screen)
    }
    return (
        <div className={`previewer ${screen ? '' : 'is-active'}`}>
            <TopPanel heading="Previewer" toggleFullScreen={fullScreen.bind(this)} />
            <div className={`previewer__text ${screen ? '' : 'is-active'}`} id="preview"
                dangerouslySetInnerHTML={{ __html: marked(text, { breaks: true }) }}
            >

                {/* {parse(marked(text, { sanitize: true }))} */}
            </div>

        </div>
    )

}


export default Previewer