import React from 'react';
import RegisterForm from './RegisterForm';

export default class RegisterPage extends React.Component {

  handleRegisterSuccess = () => {
    this.props.history.push('/login');
  }

  render() {
    return ( 
      <div className = 'current-flow' >
        <h2 className = 'title' > Register </h2> 
        <RegisterForm 
          onRegisterSuccess = {this.handleRegisterSuccess}
        /> 
      </div>
    );
  }
}
