import React from 'react';
import { connect } from 'react-redux';

import { isNotBlank } from '../../actions';

class DrawArt extends React.Component {

    state = {
        art:  []
    }

    createArray() {
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
        console.log("1", this.props.isBlank);
        if (this.state.art.length === 0 || this.props.isBlank) {
            this.state.art = canva;
            this.props.isNotBlank();
        } else {
            const height = (this.state.art.length <= canva.length) ? this.state.art.length : canva.length;
            const width = (this.state.art[0].length <= canva[0].length) ? this.state.art[0].length : canva[0].length; 
            for (let i = 0; i < height; i++) {
                for (let j = 0; j < width; j++) {
                    canva[i][j].color = this.state.art[i][j].color;
                }
            }
            this.state.art = canva;
        }
    }

    createCanva() {
        this.createArray()
        return this.state.art.map(row => {
            return row.map(pixel => {
                const myStyle = {backgroundColor: pixel.color};
                const key = pixel.cell;
                return <div className="grid-element" data={pixel.cell} key={key} style={myStyle}></div>;
            })
        })
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
            this.state.art[row][col].color = this.props.selectedColor;
            event.target.style.color = this.props.selectedColor;
            event.target.style.backgroundColor = this.props.selectedColor;
            event.target.style.fontSize = '1px';
            event.target.innerHTML = "k";
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