import React from 'react';

import Pixel from './Pixel';


class SelectColor extends React.Component {

    onSelectColor(event) {
        if (event.target.className.includes("Pixel")) {
            this.props.selectColor(event.target.style.backgroundColor);
        }
    }
    render() {
        return (
            <div className="select-color-Pixel">
                <div className="selected-color">
                    <div className="selected-color-text">Wybrany kolor</div>
                    <Pixel color={this.props.selectedColor}/>
                </div>
                <div className="colors-to-select" >
                    <Pixel color="red"/>
                    <Pixel color="green"/>
                    <Pixel color="yellow"/>
                    <Pixel color="balck"/>
                    <Pixel color="white"/>
                    <Pixel color="blue"/>
                    <Pixel color="purple"/>
                    <Pixel color="orange"/>
                    <Pixel color="pink"/>
                </div>
            </div>
        )
    }
}

export default SelectColor;