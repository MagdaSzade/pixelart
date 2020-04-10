import React from 'react';
import _ from 'lodash';
import database from '../../api/database';

import { registerValidator, showError } from '../../validators/dataValidators'

class RegisterPopup extends React.Component {
    state = {
        email: "",
        password: "",
        password2: "",
        error: {}
    }

    onEmailChange(event) {
        this.setState({email: event.target.value});
    }

    onPasswordChange(event) {
        this.setState({password: event.target.value});
    }

    onPassword2Change(event) {
        this.setState({password2: event.target.value});
    }

    onFormSubmit = async (event) => {
        event.preventDefault();
        const errors = registerValidator(event.target);
        if (_.isEmpty(errors)) {
            const response = await database.post('user/register', {
                email: this.state.email,
                password: this.state.password,
            });
            if (response.data.includes("E11000")) {
                this.setState({error: {other: "Podany email już jest zarejestrowany"}});
            } else if (response.data.includes("email")) {
                this.setState({error: {email: "Niepoprawny format emailu"}});
            } else {
                this.setState({error: {other: "Wysłaliśmy do Ciebie e-mail, proszę potwierdź założenie konta"}});
            }
        } else {
            this.setState({error: errors});
        }
    }
  
    render() {
        return (
            <div className="inner">
                <form className="form" onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className="popup-text">Rejestracja</div>
                    <label className="label" htmlFor="email">E-mail:</label>
                    <input className="input-text" onChange={(e) => this.onEmailChange(e)} value={this.state.email} type="text" name="email" id="email"></input>
                    {showError("email", this.state.error)}
                    <label className="label" htmlFor="password">Hasło:</label>
                    <input className="input-text" onChange={(e) => this.onPasswordChange(e)} value={this.state.password} type="password" name="password" id="password"></input>
                    {showError("password", this.state.error)}
                    <label className="label" htmlFor="password2">Powtórz hasło:</label>
                    <input className="input-text" onChange={(e) => this.onPassword2Change(e)} value={this.state.password2} type="password" name="password2" id="password2"></input>
                    {showError("passwords", this.state.error)}
                    <button className="header-button">rejestruj</button>
                    <div></div>
                    {showError("other", this.state.error)}
                </form>
            </div>
        )
    }
}

export default RegisterPopup;