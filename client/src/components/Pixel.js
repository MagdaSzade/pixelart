import React from "react";

import "../styles/pixel.css";

class Pixel extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    render() {
        return (
            <div className="grid-element pixel .thin-border" data=  {this.props.data} style={this.props.style}></div>
        )
    }
}

export default Pixel;
