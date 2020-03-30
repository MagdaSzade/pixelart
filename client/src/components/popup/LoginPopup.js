import React from 'react';

import { loginValidator, showError } from '../../validators/dataValidators'

class LoginPopup extends React.Component {
    state = {
        email: "",
        password: "",
        error: {}
    }

    onEmailChange(event) {
        this.setState({email: event.target.value});
    }

    onPasswordChange(event) {
        this.setState({password: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        const errors = loginValidator(event.target);
        if (errors.length === 0) {
            
        } else {
            this.setState({error: errors});
        }
    } 

    render() {
        return (
            <div className="inner">
                <form className="form" onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className="popup-text">Logowanie</div>
                    <label className="label" htmlFor="email">E-mail:</label>
                    <input className="input-text" onChange={(e) => this.onEmailChange(e)} value={this.state.email} type="text" name="email" id="email"></input>
                    {showError("email", this.state.error)}
                    <label className="label" htmlFor="password">Hasło:</label>
                    <input className="input-text" onChange={(e) => this.onPasswordChange(e)} value={this.state.password} type="password" name="password" id="password"></input>
                    {showError("password", this.state.error)}
                    <button className="header-button">zaloguj</button>
                </form>
            </div>
        )
    }
}

export default LoginPopup;