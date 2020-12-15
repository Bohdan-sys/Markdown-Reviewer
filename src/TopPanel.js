import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TopPanel = ({ heading, toggleFullScreen, screen }) => {

    const [showMode, setShowMode] = useState();

    const changeState = () => {
        setShowMode(!showMode)
        toggleFullScreen()
    }

    return (
        <div className='top-panel'>
            <div className='row row--align_center'>
                <div className='cell cell--8'>
                    <h1 className='caption caption--size_5 caption--font_russo'>
                        <FontAwesomeIcon icon={['fab', 'free-code-camp']} className="icon icon-freeCodeCamp" />
                        {heading}
                    </h1>
                </div>
                <div className='cell cell--4'>
                    <button className='button'
                        onClick={() => { changeState() }}>
                        {showMode ?
                            <FontAwesomeIcon icon={['fas', 'compress-arrows-alt']} className="icon icon-arrows" />
                            : <FontAwesomeIcon icon={['fas', 'expand-arrows-alt']} className="icon icon-arrows" />}
                    </button>

                </div>

            </div>

        </div>
    )
}

export default TopPanel
