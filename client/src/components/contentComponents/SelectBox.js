import React from 'react';
import { connect } from 'react-redux';

import Box from './Box';
import { selectColor } from '../../actions';

class SelectBox extends React.Component {

    onSelectColor(event) {
        if (event.target.className.includes("box")) {
            this.props.selectColor(event.target.style.backgroundColor);
        }
    }
    render() {
        return (
            <div className="select-color-box">
                <div className="selected-color">
                    <div className="selected-color-text">Wybrany kolor</div>
                    <Box color={this.props.selectedColor}/>
                </div>
                <div className="colors-to-select" onClick={(event) => {this.onSelectColor(event)}}>
                    <Box color="red"/>
                    <Box color="green"/>
                    <Box color="yellow"/>
                    <Box color="balck"/>
                    <Box color="white"/>
                    <Box color="blue"/>
                    <Box color="purple"/>
                    <Box color="orange"/>
                    <Box color="pink"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedColor: state.selectedColor
    }
}

export default connect(mapStateToProps, { selectColor })(SelectBox);