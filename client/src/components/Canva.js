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
                                onPixelClick={this.onChangeColor}/>
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
        console.log(pixelRef.current);
        pixelRef.current.style.backgroundColor = this.props.selectedColor;
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