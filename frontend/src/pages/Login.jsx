import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const
  const { login } = useAuth();
  const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://localhost:5000/api/auth/login', { email, password });
            login({ name: res.data.name, email, role: res.data.role }, res.data.token);

            const role = res.data.role;
            if (role === 'Admin') navigate('/admin');
            else if (role === 'Recruiter') navigate('/recruiter');
            else if (role === 'Delivery Manager') navigate('/delivery');
            else if (role === 'Finance/HR Ops') navigate('/finance');
        } catch (error) {
            alert(error.response?.data?.message || 'Login failed');
        }
    };

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '20px' }}>
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }} required/>
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }} required/>
        <button type='submit' style={{ width: '100%', padding: '10px', backgroundColor: '#333', color: 'white' }}>Login</button>    
      </form>
      <p>No account? <a href="/signup">Signup</a></p>
    </div>
  );
};

export default Login;