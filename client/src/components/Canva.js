import React from 'react';

import Pixel from './Pixel';

class Canva extends React.Component {
    state = {
        pixels: [],
        width: 0,
        height: 0
    }

    componentDidMount() {
        let pixels = this.createWhiteBoard(this.props.height, this.props.width);
        this.setState({ width: this.props.width, height: this.props.height, pixels: pixels });
    }

    componentDidUpdate() {
        if (this.props.width !== this.state.width || this.props.height !== this.state.height) {
            const newPixels = this.createWhiteBoard(this.props.height, this.props.width);
            newPixels.forEach(pixel => {
                const index = this.state.pixels.findIndex((element) => { return element.key === pixel.key});
                if ( index !== -1 ) {
                    pixel.color = this.state.pixels[index].color
                }
            });
            console.log(newPixels);
            this.setState({ width: this.props.width, height: this.props.height, pixels: newPixels });
        }
    }

    createWhiteBoard = (height, width) => {
        let whiteBoard = [];
        for (let i = 0; i < height * width; i++) {
            const key = this.createKey(Math.floor(i/height), (i)%width);
            const pixel = { color: 'white', key: key };
            whiteBoard.push(pixel);
        }
        return whiteBoard;
    }

    createCanva = () => {
        return this.state.pixels.map((pixel) => {       
            return (
                <Pixel 
                    key={pixel.key} 
                    id={pixel.key} 
                    style={{backgroundColor: pixel.color}}
                    onPixelClick={this.onChangeColor}
                />
            )
        });        
    }

    createKey(height, width) {
        let key = "";
        if (height < 10) {
            key += "0" + height;
        } else {
            key += height;
        }
        if (width < 10) {
            key += "0" + width;
        } else {
            key += width;
        }
        return key;
    }
    
    onChangeColor = (pixelRef) => {
        const index = this.indexOfPixel(pixelRef.current.id);
        const newPixels = this.state.pixels.map((pixel, i) => {
            if (i === index) {
                return { color: this.props.selectedColor, key: pixel.key };
            }
            return pixel;
        })
        this.setState({ pixels: newPixels });
    }

    indexOfPixel(pixelId) {
        const height = parseInt(pixelId.substring(0, 2));
        const width = parseInt(pixelId.substring(2));
        const index = height * this.props.width + width;
        return index;
    }

    render() {
        return (
            <div 
                className="canva grid"
                id="canva"
                style={{gridTemplateColumns: `repeat(${this.props.width}, 1fr)`}}
            >  
                {this.createCanva()}
            </div>
            
        )
    }
}

export default Canva;