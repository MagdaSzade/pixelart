import React from 'react';

class RegisterPopup extends React.Component {
    state = {
        email: "",
        password: "",
        password2: ""
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

    onFormSubmit(event) {
        event.preventDefault();
    }
    
    render() {
        return (
            <div className="inner">
                <form className="form" onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className="popup-text">Rejestracja</div>
                    <label className="label" htmlFor="email">E-mail:</label>
                    <input className="input-text" onChange={(e) => this.onEmailChange(e)} value={this.state.email} type="text" name="email" id="email"></input>
                    <div className="warning"></div>
                    <label className="label" htmlFor="password">Hasło:</label>
                    <input className="input-text" onChange={(e) => this.onPasswordChange(e)} value={this.state.password} type="password" name="password" id="password"></input>
                    <div className="warning"></div>
                    <label className="label" htmlFor="password2">Powtórz hasło:</label>
                    <input className="input-text" onChange={(e) => this.onPassword2Change(e)} value={this.state.password2} type="password" name="password2" id="password2"></input>
                    <div className="warning"></div>
                    <button className="header-button">rejestruj</button>
                </form>
            </div>
        )
    }
}

export default RegisterPopup;