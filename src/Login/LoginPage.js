import React from 'react';
import LoginForm from './LoginForm';

export default class LoginPage extends React.Component {
  
    handleLoginSuccess = () => {
      const { location, history } = this.props
      console.log( location, history)
      const destination = (location.state || {}).from || '/'
      history.push(destination)
      console.log(destination)
    }
  
    render() {
      return (
       <div>
          <h2>Login</h2>
          <LoginForm
            onLoginSuccess={this.handleLoginSuccess}
          />
       </div>
      )
    }
  }