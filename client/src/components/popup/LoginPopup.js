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
                <form onSubmit={(e) => this.onFormSubmit()}>
                    <label>
                        E-mail:
                        <input onChange={(e) => this.onEmailChange(e)} value={this.state.email} type="text" name="email"></input>
                    </label>
                    <br></br>
                    <label>
                        Hasło:
                        <input onChange={(e) => this.onPasswordChange(e)} value={this.state.password} type="text" name="password"></input>
                    </label>
                </form>
            </div>
        )
    }
}

export default LoginPopup;