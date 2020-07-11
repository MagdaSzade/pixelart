import React from 'react';

import '../styles/popup.css';

class PopUp extends React.Component {
    componentDidMount() {
        console.log(this.props.pixels);
    }
    render() {
        return (
            <div className="popup-out">
                <div className="popup-in">
                    POPUP
                </div>
            </div>
        )
    }
};

export default PopUp;