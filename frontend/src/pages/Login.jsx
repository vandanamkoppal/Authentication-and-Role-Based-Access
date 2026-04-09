import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:8000/api/auth/login',
        { email, password }
      );
      login({ name: res.data.name, role: res.data.role }, res.data.token);
      const role = res.data.role;
      if (role === 'Admin') navigate('/admin');
      else if (role === 'Recruiter') navigate('/recruiter');
      else if (role === 'Delivery Manager') navigate('/delivery');
      else if (role === 'Finance/HR Ops') navigate('/finance');
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f7fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '420px',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        backgroundColor: 'white'
      }}>
        <h2 style={{ textAlign: 'center', color: '#1a1a2e', marginBottom: '25px' }}>
          Login
        </h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              display: 'block', width: '100%',
              marginBottom: '15px', padding: '12px',
              borderRadius: '6px', border: '1px solid #ddd',
              fontSize: '14px', boxSizing: 'border-box'
            }} required />
          <input type="password" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              display: 'block', width: '100%',
              marginBottom: '20px', padding: '12px',
              borderRadius: '6px', border: '1px solid #ddd',
              fontSize: '14px', boxSizing: 'border-box'
            }} required />
          <button type="submit" style={{
            width: '100%', padding: '12px',
            background: '#1a1a2e', color: 'white',
            border: 'none', borderRadius: '6px',
            fontSize: '16px', cursor: 'pointer'
          }}>Login</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '15px' }}>
          No account? <a href="/signup" style={{ color: '#e94560' }}>Signup</a>
        </p>
      </div>
    </div>
  );
};

export default Login;