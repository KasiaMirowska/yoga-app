import React from 'react';
import AuthCalls from '../services/Auth_service';
import TokenService from '../services/token-service';


export default class LoginForm extends React.Component {

    handleLogin = (e) => {
        e.preventDefault();
        const { userName, password } = e.target
        
        const credentials = {
            userName: userName.value,
            password: password.value,
        }
        
        
        AuthCalls.postLogin(credentials)
        .then(res => {
            userName.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            console.log(res.authToken)
            this.props.onLoginSuccess()
        })
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <label htmlFor='userName'>
                        Username
                    </label>
                    <input type='text' id='userName'>
                    </input>
                    <label htmlFor='password'>
                        Password
                    </label>
                    <input type='text' id='password'>
                    </input>
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}