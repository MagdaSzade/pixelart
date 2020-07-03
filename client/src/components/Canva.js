import React from 'react';

import Pixel from './Pixel';

class Canva extends React.Component {
    state = {
        colors: []
    }

    componentDidMount() {
        let colors = [];
        for (let i = 0; i < this.props.height * this.props.width; i++) {
            colors.push("white");
        }
        this.setState({ colors });
    }

    createCanva = () => {
        return (
            Array.from({ length: this.props.height }, (v, h) =>  {
                return (
                    Array.from({length : this.props.width}, (v, w) => {
                        const key = this.createKey(h, w);
                        return (
                            <Pixel 
                                key={key} 
                                id={key} 
                                style={{backgroundColor: "white"}}
                                onPixelClick={this.onChangeColor}
                            />
                        )
                    })
                )
            })
        )
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
        //pixelRef.current.style.backgroundColor = this.props.selectedColor;
        const index = this.indexOfPixel(pixelRef.current.id);
        this.state.colors[index] = this.props.selectedColor;
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