import React from 'react';
import AuthCalls from '../services/Auth_service';



export default class RegisterForm extends React.Component {
    state = {
        error: null,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { full_name, user_name, password } = e.target;
        const newUser = {
            fullname: full_name.value,
            username: user_name.value,
            password: password.value,
        };
        
        AuthCalls.postUser(newUser)
            .then(() => {
                full_name.value = '';
                user_name.value = '';
                password.value = '';
                this.props.onRegisterSuccess();
            })
            .catch(res => {
                console.log(res);
                this.setState({
                    error: res
                });
            });
    }

    handleAfterErrorDisplay = () => {
        this.setState({
            error: null
        });
    }

    handleFullNameCleanUp = (e) => {
        e.preventDefault();
        let full_name = e.target;
        if (full_name.value !== null) {
            full_name.value = '';
            this.setState({
                error: null
            });
        }
    }

    handleUserNameCleanUp = (e) => {
        e.preventDefault();
        let user_name = e.target;
        if (user_name.value !== null) {
            user_name.value = '';
            this.setState({
                error: null
            });
        }
    }

    handlePasswordCleanUp = (e) => {
        e.preventDefault();
        let password = e.target;
        if (password.value !== null) {
            password.value = '';
            this.setState({
                error: null
            });
        }
    }

    render() {
        return (
            <div className='login'>
                <div className='error'>
                    {this.state.error ? this.state.error.message : null}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className='section'>
                        <input name='full_name' type='text' placeholder='full name' onClick={this.handleFullNameCleanUp}/>
                    </div>

                    <div className='section'>
                        <input name='user_name' type='text' placeholder='username' required onClick={this.handleUserNameCleanUp} />
                    </div>

                    <div className='section'>
                        <input name="password" type='password' placeholder='password' onClick={this.handlePasswordCleanUp} required />
                    </div>

                    <button className='login-button' type="reset" onClick={this.handleAfterErrorDisplay}>
                        Cancel
                    </button>
                    <button className='login-button' type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}