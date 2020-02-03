import React from 'react';
import { connect } from 'react-redux'

import Button from '../headerComponents/Button'
import { widthOfPixelArt, heightOfPixelArt } from '../../actions';

import '../../styles/selectSizeBoxStyles.css'


class SelectSizeBox extends React.Component {
    state = {
        widthValue: this.props.width,
        heightValue: this.props.height,
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.widthOfPixelArt(event.target.width.value);
        this.props.heightOfPixelArt(event.target.height.value);
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
                        <div className="submit-button">
                            <Button text="submit" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        width: state.width,
        height: state.height
    }
}

export default connect(mapStateToProps, { widthOfPixelArt, heightOfPixelArt })(SelectSizeBox);