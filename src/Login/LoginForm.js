import React from 'react';
import AuthCalls from '../services/Auth_service';
import TokenService from '../services/token-service';
import YogaContext from '../Context';

export default class LoginForm extends React.Component {
    static contextType = YogaContext;
    
    handleLogin = (e) => {
        e.preventDefault();
        const { userName, password } = e.target
        
        const credentials = {
            userName: userName.value,
            password: password.value,
        }
        
        
        AuthCalls.postLogin(credentials)
        .then(res => {
            console.log(res, 'HRES')
            userName.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
        })
        .catch(error => {
            console.log(error, 
                "ERROR")
            this.context.setError(error.message)
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