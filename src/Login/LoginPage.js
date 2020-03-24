import React from 'react';
import LoginForm from './LoginForm';

export default class LoginPage extends React.Component {
  
    handleLoginSuccess = () => {
      const { location, history } = this.props;
      const destination = (location.state || {}).from || '/';
      history.push(destination);
    }
  
    render() {
      return (
       <div className='current-flow'>
          <h2 className='title' >LOGIN</h2>
          <LoginForm
            onLoginSuccess={this.handleLoginSuccess}
          />
       </div>
      )
    };
  };