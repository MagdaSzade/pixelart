import React from 'react';
import { connect } from 'react-redux';

import { isNotBlank } from '../../actions';
import Pixel from './Pixel';

class DrawArt extends React.Component {

    state = {
        art:  []
    }

    componentDidMount() {
        this.createArt();
    }

    componentDidUpdate() {
        if (this.props.isBlank) {
            this.createArt();
            this.props.isNotBlank();
        }
        else if (this.props.height != this.state.art.length || this.props.width != this.state.art[0].length) {
            const canva = new Array(this.props.height);
            for (let i = 0; i < this.props.height; i++) {
                canva[i] = new Array(this.props.width);
            }
    
            for (let i = 0; i < this.props.height; i++) {
                for (let j = 0; j < this.props.width; j++) {
                    if (i < this.state.art.length && j < this.state.art[0].length) {
                        let color = this.state.art[i][j].color;
                        canva[i][j] = { 
                            color: color,
                            cell: 'row' + i + "col" + j
                        } 
                    } else {
                        canva[i][j] = { 
                            color: "#FFF",
                            cell: 'row' + i + "col" + j
                        } 
                    }
                }
            }
    
            this.setState({art: canva});
        }    
    }

    createCanva() {
        return this.state.art.map(row => {
            return row.map(pixel => {
                const myStyle = {backgroundColor: pixel.color};
                const key = pixel.cell;
                return <Pixel style={myStyle} key={key} data={key}></Pixel>;
            })
        })
    }

    createArt() {
        const canva = new Array(this.props.height);
        for (let i = 0; i < this.props.height; i++) {
            canva[i] = new Array(this.props.width);
        }

        for (let i = 0; i < this.props.height; i++) {
            for (let j = 0; j < this.props.width; j++) {
                let color = '#FFF';
                canva[i][j] = { 
                    color: color,
                    cell: 'row' + i + "col" + j
                }
            }
        }

        this.setState({art: canva});
    }

    onColor(event) {
        if (event.target.getAttribute('data')) {
            const cell = event.target.getAttribute('data');
            let col = 0;
            let row = 0;
            if (cell.indexOf('col') === 4) {
                row = cell.charAt(3);
                if (cell.length === 8) {
                    col = cell.charAt(7);
                } else {
                    col = cell.charAt(7) + cell.charAt(8);
                }
            } else {
                row = cell.charAt(3) + cell.charAt(4);
                if (cell.length === 9) {
                    col = cell.charAt(8);
                } else {
                    col = cell.charAt(8) + cell.charAt(9);
                }
            }
            const canva = this.state.art;
            canva[row][col].color = this.props.selectedColor;
            this.setState({art: canva});
        }
    }
    
    render() {
        const grid = `repeat(${this.props.width}, 15px)`;
        const myStyle = { gridTemplateColumns: grid }
        return (
            <div className="canva-box">  
                <div onClick={(e) => {this.onColor(e)}}className="canva" style={myStyle}>
                    {this.createCanva()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        width: state.size.width,
        height: state.size.height,
        isBlank: state.size.blank,
        selectedColor: state.selectedColor
    }
}

export default connect(mapStateToProps, { isNotBlank })(DrawArt);