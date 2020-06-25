import React from 'react';

import Button from './Button'

class SelectSize extends React.Component {

    render() {
        return(
            <div className="select-size">
                <form>
                    <div className="select-size-box">
                        <div className="slider-width-box select-box">
                            <label className="select-size-text" htmlFor="width">szerokość</label>
                            <input 
                                className="input" 
                                type="text" 
                                id="width" 
                            />px
                            <input 
                                className="slider" 
                                type="range"  
                                min="10" 
                                max="20"
                            />
                        </div>
                        <div className="slider-width-box select-box">
                            <label className="select-size-text" htmlFor="width">szerokość</label>
                            <input 
                                className="input" 
                                type="text" 
                                id="width" 
                            />px
                            <input 
                                className="slider" 
                                type="range"  
                                min="10" 
                                max="20"
                            />
                        </div>
                        <div className="submit-button" data-id="box">
                            <Button data="change" text="zmień" />
                            <Button data="clear" text="wyczyść" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SelectSize;