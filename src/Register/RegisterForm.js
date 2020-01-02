import React from 'react';
import AuthCalls from '../services/Auth_service';
import ValidationError from './ValidationError';


export default class RegisterForm extends React.Component {
    state = {
        error: null,
        full_name: {
            value: '',
        },
        user_name: {
            value: '',
            touched: false
        },
        password: {
            value: '',
            touched: false
        },
    }

    handleFullName = (name) => {
        console.log(name)
        this.setState({ full_name: { value: name, touched: true } })
    }

    handleUserName = (name) => {
        console.log(name)
        this.setState({ user_name: { value: name, touched: true } })
    }

    handlePassword = (password) => {
        console.log(password)
        this.setState({ password: { value: password, touched: true } })
    }

    validateUserName = () => {
        const name = this.state.user_name.value.trim;
        if (name.length === 0) {
            return 'User name is required';
        } else if (name.length < 3) {
            return 'User name must be at least 3 characters long';
        }
    }

    validatePassword = () => {
        const password = this.state.password.value.trim();
        if (password.length === 0) {
            return 'Password is required';
        } else if (password.length < 6 || password.length > 72) {
            return 'Password must be between 6 and 72 characters long';
        } else if (!password.match(/[0-9]/)) {
            return 'Password must contain at least one number';
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { full_name, user_name, password } = this.state;
        const newUser = {
            fullname: full_name.value,
            username: user_name.value,
            password: password.value,
        }
        console.log(newUser)
        AuthCalls.postUser(newUser)
        .then(user => {
            full_name.value ='';
            user_name.value = '';
            password.value = '';
            this.props.onRegistrationSuccess()
        })
        .catch(res => {
            this.setState({
                error: res.error
            })
        })
    }
    render() {
        console.log(this.state.error)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='full_name'>
                        User Full Name:
                    </label>
                    <input name='full_name' type='text' onChange={(e) => this.handleFullName(e.target.value)} />
                    <label htmlFor='full_name'>
                        User Name:
                    </label>
                    <input name='user_name' type='text' onChange={(e) => this.handleUserName(e.target.value)} required />
                    {this.state.password.touched && <ValidationError message={this.validateUserName()} />}
                    <label htmlFor='password'>
                        Password:
                    </label>
                    <input name="password" type='text' onChange={(e) => this.handlePassword(e.target.value)} required />
                    {this.state.user_name.touched && <ValidationError message={this.validatePassword()} />}
                    <button type="reset" >
                        Cancel
                    </button>
                    <button
                        type='submit'
                        // disabled = {
                        //     this.validateUserName() || this.validatePassword()
                        // }
                        >
                        Submit
                            </button>
                </form>
            </div>
        )
    }
}