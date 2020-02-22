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
                    <br></br>
                    <label>
                        Powtórz hasło:
                        <input onChange={(e) => this.onPassword2Change(e)} value={this.state.password2} type="text" name="password2"></input>
                    </label>
                </form>
            </div>
        )
    }
}

export default RegisterPopup;