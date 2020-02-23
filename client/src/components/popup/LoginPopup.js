import React from 'react';

class LoginPopup extends React.Component {
    state = {
        email: "",
        password: ""
    }

    onEmailChange(event) {
        this.setState({email: event.target.value});
    }

    onPasswordChange(event) {
        this.setState({password: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
    } 

    render() {
        return (
            <div className="inner">
                <form className="form" onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className="popup-text">Logowanie</div>
                    <label className="label" htmlFor="email">E-mail:</label>
                    <input className="input-text" onChange={(e) => this.onEmailChange(e)} value={this.state.email} type="text" name="email" id="email"></input>
                    <div className="warning"></div>
                    <label className="label" htmlFor="password">Hasło:</label>
                    <input className="input-text" onChange={(e) => this.onPasswordChange(e)} value={this.state.password} type="password" name="password" id="password"></input>
                    <div className="warning"></div>
                    <button className="header-button">zaloguj</button>
                </form>
            </div>
        )
    }
}

export default LoginPopup;