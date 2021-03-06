import React from "react";
import PropTypes from 'prop-types';

import "../../styles/pixel.css";

class Pixel extends React.Component {
    constructor(props) {
        super(props);
        this.pixelRef = React.createRef();
    }

    componentDidMount() {
        this.pixelRef.current.addEventListener('click', this.onClick);
    }

    onClick = () => {
        this.props.onPixelClick(this.pixelRef);
    }

    render() {
        return (
            <div 
                ref={this.pixelRef}
                className="pixel thin-border" 
                id=  {this.props.id} 
                style={this.props.style}>
            </div>
        )
    }
}

Pixel.propTypes = {
    id: PropTypes.string,
    style:  PropTypes.object.isRequired,
    onPixelClick: PropTypes.func,
}

export default Pixel;
