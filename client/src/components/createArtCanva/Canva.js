import React from 'react';
import { connect } from 'react-redux';

import Pixel from '../common/Pixel';
import { setPixels, clearCanva } from '../../actions';

import { indexOfPixel, createWhiteBoard } from '../../helpers/key';

import '../../styles/canva.css'

class Canva extends React.Component {
    constructor(props) {
        super(props);
        this.tempPixels=[];
    }
    
    state = {
        width: 0,
        height: 0,
        isClicked: false
    }

    componentDidMount() {
        this.setState({ width: this.props.width, height: this.props.height });
    }

    componentDidUpdate() {
        if(this.props.clear) {
            const newPixels = createWhiteBoard(this.props.height, this.props.width);
            this.props.setPixels(newPixels);
            this.setState({ width: this.props.width, height: this.props.height });
            this.props.clearCanva(false);
        }
        if (this.props.width !== this.state.width || this.props.height !== this.state.height) {
            const newPixels = createWhiteBoard(this.props.height, this.props.width);
            newPixels.forEach(pixel => {
                const index = this.props.pixels.findIndex((element) => { return element.key === pixel.key});
                if ( index !== -1 ) {
                    pixel.color = this.props.pixels[index].color
                }
            });
            this.props.setPixels(newPixels);
            this.setState({ width: this.props.width, height: this.props.height });
        }
    }

    createCanva = () => {
        return this.props.pixels.map((pixel) => {       
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
    
    onChangeColor = (pixelRef) => {
        const index = indexOfPixel(pixelRef.current.id, this.props.width);
        const newPixels = this.props.pixels.map((pixel, i) => {
            if (i === index) {
                return { color: this.props.selectedColor, key: pixel.key };
            }
            return pixel;
        })
        this.props.setPixels(newPixels);
    }

    onPainting = (event) => {
        if(this.state.isClicked && event.target.id) {
            const index = indexOfPixel(event.target.id, this.props.width);
            event.target.style.backgroundColor=this.props.selectedColor;
            this.tempPixels.push(index);
        }
    }

    startPainting = (event) => {
        this.setState({isClicked: true})
    }

    stopPainting = event => {
        this.setState({isClicked: false});
        if(this.tempPixels.length !== 0) {
            const newPixels = this.props.pixels.map((pixel, i) => {
                if (this.tempPixels.includes(i)) {
                   return { color: this.props.selectedColor, key: pixel.key } 
                } else {
                    return pixel;
                }
            });
            this.tempPixels=[];
            this.props.setPixels(newPixels);
        }
    }

    render() {
        return (
            <div className='canva-conteiner' onMouseOver={this.onPainting} onMouseDown={this.startPainting} onMouseUp={this.stopPainting} onMouseLeave={this.stopPainting}>
                <div 
                    className="canva grid"
                    id="canva"
                    style={{gridTemplateColumns: `repeat(${this.props.width}, 20px)`}}
                >
                    {this.createCanva()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        width: state.size.width,
        height: state.size.height,
        pixels: state.pixels,
        clear: state.clear,
        selectedColor: state.selectedColor
    }
}

export default connect(mapStateToProps, { setPixels, clearCanva })(Canva);