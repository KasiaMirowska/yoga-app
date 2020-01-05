import React from 'react';
import AuthCalls from '../services/Auth_service';



export default class RegisterForm extends React.Component {
    state = {
        error: null,
        full_name: '',
        user_name: '',
        password: '',
    }

    handleFullName = (name) => {
        console.log(name)
        this.setState({ full_name: name })
    }

    handleUserName = (name) => {
        console.log(name)
        this.setState({ user_name: name })
    }

    handlePassword = (password) => {
        console.log(password)
        this.setState({ password: password })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { full_name, user_name, password } = this.state;
        const newUser = {
            fullname: full_name,
            username: user_name,
            password: password,
        }
        console.log(newUser)
        AuthCalls.postUser(newUser)
            .then(user => {
                full_name = '';
                user_name = '';
                password = '';
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                console.log(res)
                this.setState({
                    error: res
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

                    <label htmlFor='password'>
                        Password:
                    </label>
                    <input name="password" type='text' onChange={(e) => this.handlePassword(e.target.value)} required />

                    <button type="reset" >
                        Cancel
                    </button>
                    <button
                        type='submit'
                    >
                        Submit
                            </button>
                </form>
            </div>
        )
    }
}