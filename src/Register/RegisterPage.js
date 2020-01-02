import React from 'react';
import RegisterForm from './RegisterForm';

export default class RegisterPage extends React.Component {
   
    handleRegisterSuccess = () => {
        const { history } = this.props
        history.push('/login')
      }
    
      render() {
        return (
         <div>
            <h2>Register</h2>
            <RegisterForm
              onRegisterSuccess={this.handleRegisterSuccess}
            />
         </div>
        )
      }
}