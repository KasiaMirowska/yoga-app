import React from 'react';
import AuthCalls from '../services/Auth_service';
import TokenService from '../services/token-service';
import YogaContext from '../Context';
import './LoginForm.css';

export default class LoginForm extends React.Component {
    static contextType = YogaContext;

    state = {
        error: null,
    }

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
                this.props.onLoginSuccess()
            })
            .catch(res => {
                console.log(res)
                this.setState({
                    error: res
                })
            })
    }

    handleAfterErrorDisplay = ()=> {
        this.setState({
            error: null
        })
    }
    handleUsenNameCleanUp = (e) => {
        e.preventDefault();
        let userName = e.target;
        if(userName.value !== null) {
            userName.value = '';
            this.setState({
                error: null
            })
        } 
    }

    handlePasswordCleanUp = (e) => {
        e.preventDefault();
        let password = e.target;
        if(password.value !== null) {
           password.value = '';
           this.setState({
            error: null
        })
        }  
    }
    render() {
        return (
            <div className='login'>
                <div className='error'>
                { this.state.error ? this.state.error.message : null }
                </div>
                <form onSubmit={this.handleLogin}>
                    <div className='section'>
                        <input className='inp' type='text' id='userName' placeholder='username' onClick={this.handleUsenNameCleanUp}>
                        </input>
                    </div>
                    <div className='section'>
                        <input className='inp' type='password' placeholder='password' id='password' onClick={this.handlePasswordCleanUp}>
                        </input>
                    </div>
                    <button className='login-button' type="reset" onClick={this.handleAfterErrorDisplay}>Reset</button>
                    <button className='login-button' type='submit'>Login</button>
                </form>
            </div>
        )
    }
}