import React from "react";

import "../styles/pixel.css";

const Pixel = (props) => {
    return (
        <div className="grid-element pixel .thin-border" data={props.data} style={props.style}></div>
    )
}

export default Pixel;
