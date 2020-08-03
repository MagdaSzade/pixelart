import React from 'react';
import { connect } from 'react-redux';

import { selectSize, clearCanva } from '../../actions';

import Button from '../common/Button';

import '../../styles/selectSize.css'

class SelectSize extends React.Component {
    state = {
        height: this.props.height,
        width: this.props.width
    }

    onHeightChange = event => {
        this.setState({height: parseInt(event.target.value)});
    };

    
    onWidthChange = event => {
        this.setState({width: parseInt(event.target.value)});
    };

    onSizeChange = event => {
        event.preventDefault();
        this.props.selectSize(this.state.width, this.state.height);
    }

    onClear = () => {
        this.props.clearCanva(true);
    }

    render() {
        return(
            <div className="select-size">
                <form onSubmit={this.onSizeChange}>
                    <div className="grid inputs">
                        <label htmlFor="height">Wysokość</label>
                        <input
                            type="number"
                            id="height"
                            name="height"
                            min="5"
                            max="15"
                            value={this.state.height}
                            onChange={this.onHeightChange}
                        />
                        <Button onButtonClick={this.onSizeChange} text="zmień"/>
                        <label htmlFor="width">Szerokość</label>
                        <input
                            type="number"
                            id="width"
                            name="width"
                            min="5"
                            max="15"
                            value={this.state.width}
                            onChange={this.onWidthChange}
                        />
                        <Button onButtonClick={this.onClear} text="wyczyść"/>
                    </div>
                </form> 
            </div>
        )
    }
}

const mapStateToProps = props => {
    return {
        width: props.size.width,
        height: props.size.height
    }
}

export default connect(mapStateToProps, { selectSize, clearCanva })(SelectSize);  