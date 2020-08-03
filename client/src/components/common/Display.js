import React from 'react';

class Display extends React.Component {
    componentDidMount() {
        this.fillCanva();
    }

    componentDidUpdate() {
        this.fillCanva();
    }

    fillCanva() {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        this.props.pixels.forEach((pixel) => {
            ctx.fillStyle =  pixel.color;
            const startPointY = parseInt(pixel.key.substring(0, 2)) * 10;
            const startPointX = parseInt(pixel.key.substring(2)) * 10;
            ctx.fillRect(startPointX, startPointY, 10, 10);
        });
    }
    
    render() {
        return (
            <div>
                <canvas className="solid-border" id="myCanvas" width={this.props.width*10} height={this.props.height*10}></canvas>
            </div>
        )
    }
}

export default Display;