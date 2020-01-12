import React from 'react';
import AuthCalls from '../services/Auth_service';
import TokenService from '../services/token-service';
import YogaContext from '../Context';
import './LoginForm.css';

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
            <div className='login'>
                <form onSubmit={this.handleLogin}>
                    <div className='section'>
                        <input className='inp' type='text' id='userName' placeholder='username'>
                        </input>
                    </div>
                    <div className='section'>
                        <input className='inp' type='text' placeholder='password' id='password'>
                        </input>
                    </div>
                    <button className='login-button' type="reset" >Cancel</button>
                    <button className='login-button' type='submit'>Login</button>
                </form>
            </div>
        )
    }
}