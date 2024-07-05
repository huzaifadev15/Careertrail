import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import carrertrail from './images/carrertrail.png';
import yourinteractivebootcamp from './images/YourInteractiveBootcampProgram.png';
import axios from 'axios';
const Login = () => {
  const [values, SetValues] = useState({
    email: '',
    password: '',
  });
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios
      .post('http://localhost:3000/auth/adminlogin', values)
      .then((result) => console.log(result).catch((err) => console.log(err)));
  };
  return (
    <div className='container'>
      <div className='box1'></div>
      <div className='box2'>
        <img className='logo' src={carrertrail} alt='Career Trail' />
        <div className='form'>
          <form
            onSubmit={(e) => {
              HandleSubmit();
              // Handle form submission here
            }}
            className='FORM'
          >
            <h2 className='heading'>Login</h2>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='email'
              required
              onChange={(e) => SetValues({ ...values, email: e.target.values })}
            />

            <br />
            <input
              type='password'
              name='password'
              placeholder='Password'
              className='password'
              required
              onChange={(e) =>
                SetValues({ ...values, password: e.target.value })
              }
            />
            <br />
            <div className='remember'>
              <input type='checkbox' name='remember' className='checkbox' />
              Remember me
              <a href='/carrer trail/forgetpage'>Forgot Password?</a>
            </div>
            <button type='submit' name='login' className='btn'>
              Login
            </button>
            <p>
              Don't have an account?{' '}
              <a href='../registerpage/register.php' className='register'>
                Register
              </a>
            </p>
          </form>
          <img
            className='foot'
            src={yourinteractivebootcamp}
            width='100%'
            height='20px'
            alt='Interactive Bootcamp Program'
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
