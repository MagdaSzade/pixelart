import React from 'react';

import Pixel from './Pixel';

import "../styles/selectColor.css";


class SelectColor extends React.Component {
    state = {
        selectedColor: "black",
        colorsToSelect: ["red", "green", "yellow", "black", "blue", "purple", "orange", "white"]
    }

    onSelectColor = (event) => {
        if (event.target.className.includes("pixel")) {
            this.setState({selectedColor: event.target.style.backgroundColor});
            this.props.onSelectColor(event.target.style.backgroundColor);
        }
    }

    allColorToSelect() {
        return (
            this.state.colorsToSelect.map(color => {
                return <Pixel style={{backgroundColor: color}} key={color}/>
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
                <div className="colors-to-select flex" 
                    onClick={this.onSelectColor}   
                >
                    {this.allColorToSelect()}
                </div>
            </div>
        )
    }
}

export default SelectColor;