import React from 'react';

const Box = (props) => {
    const myStyle = {backgroundColor: props.color}
    return (
        <div className="box" style={myStyle}></div>
    );
}

export default Box;