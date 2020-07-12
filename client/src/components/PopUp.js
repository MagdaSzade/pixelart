import React from 'react';

import Button from './Button';

import '../styles/popup.css';
import { ThemeProvider } from '@material-ui/core';

class PopUp extends React.Component {
    componentDidMount() {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        this.props.pixels.forEach((pixel, index) => {
            ctx.fillStyle = pixel.color;
            const startPointY = parseInt(pixel.key.substring(0, 2)) * 10;
            const startPointX = parseInt(pixel.key.substring(2)) * 10;
            ctx.fillRect(startPointX, startPointY, 10, 10);
        })
        
    }

    render() {
        return (
            <div className="popup-out" onClick={this.props.closePopUp}>
                <div className="popup-in">
                    <div className="art">
                        <canvas className="solid-border" id="myCanvas" width={this.props.width*10} height={this.props.height*10}></canvas>
                    </div>
                    <div className="summary">
                        Aby udostępnić swój pixelar zapłać {this.props.width * this.props.height}gr na skarbonkę
                        <Button />
                    </div>
                </div>
            </div>
        )
    }
};

export default PopUp;