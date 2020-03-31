import React from 'react';
import { connect } from 'react-redux';
import LoginPopup from './LoginPopup';
import RegisterPopup from './RegisterPopup';
import InfoPopup from './InfoPopup';
import { popupNone } from '../../actions';

import '../../styles/popupStyles.css';

class Popup extends React.Component {
    choosePopup() {
        switch (this.props.popup) {
            case "LOGIN":
                return <LoginPopup></LoginPopup>;
            case "REGISTER":
                return <RegisterPopup></RegisterPopup>; 
            case "INFO": 
                return <InfoPopup></InfoPopup>;
            default:
                return;
        }
    }
    
    onClosePopup(event) {
        if (event.target.className.includes('popup-out')) {
            this.props.popupNone();
        }
    }

    render() {
        if (this.props.popup === null) { 
            return null;
        } else {
            return <div className="popup-out" onClick={(e) => this.onClosePopup(e)}>{this.choosePopup()}</div>;
        }
    }
}
const mapStateToProps = ( state ) => {
    return {
        popup: state.popupType
    }
}

export default connect(mapStateToProps, { popupNone })(Popup);