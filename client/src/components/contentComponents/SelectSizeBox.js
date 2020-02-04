import React from 'react';
import { connect } from 'react-redux'

import Button from '../headerComponents/Button'
import { sizeOfPixelArt } from '../../actions';

import '../../styles/selectSizeBoxStyles.css'


class SelectSizeBox extends React.Component {
    state = {
        widthValue: this.props.width,
        heightValue: this.props.height,
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    onChange(event) {
        const isBlank = (event.target.getAttribute("data-id").includes("clear")) ? true : false;
        this.props.sizeOfPixelArt(
            this.state.widthValue,
            this.state.heightValue,
            isBlank
        );
    }

    render() {
        return(
            <div>
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className="select-size-box">
                        <div className="slider-width-box select-box">
                            <label className="select-size-text" htmlFor="width">szerokość</label>
                            <input 
                                className="input" 
                                type="text" 
                                id="width" 
                                value={this.state.widthValue} 
                                onChange={(e)=>{this.setState({widthValue: e.target.value})}}>
                            </input>px
                            <input 
                                className="slider" 
                                type="range"  
                                min="10" 
                                max="50" 
                                value={this.state.widthValue}
                                onChange={(e)=>{this.setState({widthValue: e.target.value})}}>
                            </input>
                        </div>
                        <div className="slider-height-box select-box">
                            <label className="select-size-text" htmlFor="height">wysokość</label>
                            <input 
                                className="input" 
                                type="text" 
                                id="height" 
                                value={this.state.heightValue}
                                onChange={(e)=>{this.setState({heightValue: e.target.value})}}>
                            </input>px
                            <input 
                                className="slider" 
                                type="range" 
                                min="10" 
                                max="50" 
                                value={this.state.heightValue}
                                onChange={(e)=>{this.setState({heightValue: e.target.value})}}>
                            </input>
                        </div>
                        <div className="submit-button" onClick={(e) => this.onChange(e)}>
                            <Button data="change" text="zmień" />
                            <Button data="clear" text="wyczyść" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        width: state.size.width,
        height: state.size.height
    }
}

export default connect(mapStateToProps, { sizeOfPixelArt })(SelectSizeBox);