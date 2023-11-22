import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './LoginSing.css'

const LoginSing = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggle = () => {
    setShowLogin(!showLogin);
  };

  return (
        <div className='contain'>
            <center>
        {showLogin ? <Login /> : <Register />}
        <div>
            <button onClick={handleToggle} className='button-51'>
            {showLogin ? 'Sign Up' : 'Register'}
            </button>
        </div>
        </center>
        </div>
  );
};

export default LoginSing;