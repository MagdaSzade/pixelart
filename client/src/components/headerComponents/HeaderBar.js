import React from 'react';
import { connect } from 'react-redux';

import { createArt, showArt, popupLogin, popupRegister, popupInfo } from '../../actions';
import Button from './Button';

import '../../styles/styles.css';

class HeaderBar extends React.Component {

    onChangeView(event) {
        const id = event.target.getAttribute("data-id");
        switch (id) {
            case "back": 
                this.props.showArt();
                return;
            case "create":
                this.props.createArt();
                return;
            case "info":
                this.props.popupInfo();
                return;
            case "login":
                this.props.popupLogin();
                return;
            case "register":
                this.props.popupRegister();
                return;
            default:
                return;
        }
    }

    buttonContent() {
        if (this.props.actualView === "CREATE_ART") {
            return <Button data="back" text="wróć" />
        } else {
            return <Button data="create" text="stwórz" />
        }
    }

    buttonContentLogin() {
        if (this.props.isLogin === null) {
            return (
                <div>
                    <Button data="login" text="login"></Button>
                    <Button data="register" text="rejestruj"></Button>    
                </div>
            )   
        } else {
            return (
                <Button data="logout" text="logout"></Button>
            )
        }
    }
    

    render() {
        return (
            <div className='bar-out'>
                <div onClick={(event) => this.onChangeView(event)} className='bar-in' data-id="background">
                    <div>
                        <Button data="info" text="info"/>
                        {this.buttonContent()}
                    </div>
                    <div className='header-content' data-id="text">
                        PIXELART DLA FRANKA
                    </div>
                    <div>
                        {this.buttonContentLogin()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        actualView: state.actualView,
        isLogin: state.isLogin
    }
}

export default connect(mapStateToProps, { createArt, showArt, popupInfo, popupLogin, popupRegister })(HeaderBar);