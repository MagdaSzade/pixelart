import React from 'react';
import { connect } from 'react-redux';

import Pixel from './Pixel';
import { selectColor } from '../actions';

import "../styles/selectColor.css";


class SelectColor extends React.Component {
    colorsToSelect = ["red", "green", "yellow", "black", "blue", "purple", "orange", "white"]

    onSelectColor = (pixelRef) => {
        this.props.selectColor(pixelRef.current.style.backgroundColor);
    }

    allColorToSelect() {
        return (
            this.colorsToSelect.map(color => {
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
                    <Pixel style={{backgroundColor: this.props.selectedColor}}/>
                </div>
                <div className="colors-to-select flex">
                    {this.allColorToSelect()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedColor: state.selectedColor
    }
}

export default connect(mapStateToProps, { selectColor })(SelectColor);