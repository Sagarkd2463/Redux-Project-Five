import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/actions';

function Login() {

  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({
            name: "Sagar", age: 24, email: "sagar@test.com"
          }));
        }}>
        Login
      </button>
      <button onClick={() => {
        dispatch(logout());
      }}>
        Logout
      </button>

    </div>
  )
}

export default Login;