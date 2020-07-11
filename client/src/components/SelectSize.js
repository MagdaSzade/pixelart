import React from 'react';

class SelectSize extends React.Component {
    state = {
        width: 5,
        height: 5
    };

    onHeightChange = event => {
        this.setState({height: event.target.value});
    };

    onWidthChange = event => {
        this.setState({width: event.target.value});
    };

    onSizeChange = event => {
        event.preventDefault();
        this.props.onSelectSize({
            width: this.state.width,
            height: this.state.height
        })
    }

    render() {
        return(
            <div className="select-size">
                <form onSubmit={this.onSizeChange}>
                    <label htmlFor="height">Wysokość</label>
                    <input
                        type="number"
                        id="height"
                        name="height"
                        min="5"
                        max="20"
                        value={this.state.height}
                        onChange={this.onHeightChange}
                    />
                    <label htmlFor="width">Szerokość</label>
                    <input
                        type="number"
                        id="width"
                        name="width"
                        min="5"
                        max="20"
                        value={this.state.width}
                        onChange={this.onWidthChange}
                    />
                    <input 
                        type="submit"
                        value="zmień" 
                        className='button thin-border' >
                    </input>
                </form>    
            </div>
        )
    }
}

export default SelectSize;  