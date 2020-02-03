import React from 'react';
import { connect } from 'react-redux';

class DrawArt extends React.Component {

    art = new Array();

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
        this.art = canva;
        return canva;
    }

    createCanva() {
        const canva = this.createArray()
        return canva.map(row => {
            return row.map(pixel => {
                const myStyle = {backgroundColor: pixel.color}
                return <div className="grid-element" data={pixel.cell} style={myStyle}></div>;
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
            console.log(row, col);

            event.target.style.backgroundColor = this.props.selectedColor;
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
        width: state.width,
        height: state.height,
        selectedColor: state.selectedColor
    }
}

export default connect(mapStateToProps)(DrawArt);