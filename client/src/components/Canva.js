import React from 'react';

import Pixel from './Pixel';

class Canva extends React.Component {
    createCanva = () => {
        return (
            Array.from({ length: this.props.height }, (v, k) =>  {
                return (
                    Array.from({length : this.props.width}, (v, k) => {
                        return <Pixel style={{backgroundColor: "white"}}/>
                    })
                )
            })
        )
    }
    
    onColor = (event) => {
        if (event.target.className.includes("pixel")) {
            event.target.style.backgroundColor = this.props.selectedColor;
        }
    }

    render() {
        return (
            <div 
                className="canva grid" 
                style={{gridTemplateColumns: `repeat(${this.props.width}, 1fr)`}}
                onClick={this.onColor}>  
                {this.createCanva()}
            </div>
            
        )
    }
}

export default Canva;