import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
import { mainAPI } from '../../utils/text.js';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined, password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = e => {
    setCredentials(prev => ({...prev, [e.target.id]: e.target.value}));
  };

  const navigate = useNavigate();
  const handleLogin = async e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(mainAPI('/auth/login'), credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      navigate('/');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
    }
  }

  return (
    <div className='login'>
      <div className='lContainer'>
        <input type='text' name='username' id='username' placeholder='Username' className='lInput' onChange={handleChange} />
        <input type='password' name='password' id='password' placeholder='Password' className='lInput' onChange={handleChange} />
        <button disabled={loading} className="lButton" onClick={handleLogin}>Login</button>
        { error && <span>{error.message}</span> }
      </div>
    </div>
  )
}

export default Login;