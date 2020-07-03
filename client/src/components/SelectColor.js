import React from 'react';

import Pixel from './Pixel';

import "../styles/selectColor.css";


class SelectColor extends React.Component {
    state = {
        selectedColor: "black",
        colorsToSelect: ["red", "green", "yellow", "black", "blue", "purple", "orange", "white"]
    }

    onSelectColor = (pixelRef) => {
        console.log(pixelRef.current)
        this.setState({ selectedColor: pixelRef.current.style.backgroundColor });
        this.props.onSelectColor(this.state.selectedColor);
    }

    allColorToSelect() {
        return (
            this.state.colorsToSelect.map(color => {
                return (
                    <Pixel 
                        style={{backgroundColor: color}} 
                        key={color}
                        onPixelClick={this.onSelectColor}
                    />
                )
            })
        )
    }

    render() {
        return (
            <div className="select-color grid">
                <div className="selected-color flex">
                    <div className="selected-color-text">Wybrany kolor</div>
                    <Pixel style={{backgroundColor: this.state.selectedColor}}/>
                </div>
                <div className="colors-to-select flex">
                    {this.allColorToSelect()}
                </div>
            </div>
        )
    }
}

export default SelectColor;