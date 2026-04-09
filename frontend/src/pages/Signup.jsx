import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [from, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '', role: '' });
    const [error, srtError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...from, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (from.password !== from.confirmPassword) {
            return srtError('Passwords do not match');
        }
        try {   
            await axios.post('https://localhost:5000/api/auth/signup', from);
            alert('Signup successful! Please login.');
            navigate('/login');
        } catch (error) {
            srtError(error.response?.data?.message || 'Signup failed');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
            <h2>Signup</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='FullName' onChange={handleChange} style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '10px' }} required/>
                <input type='email' name='email' placeholder='Email'  onChange={handleChange} style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '10px' }} required/>
                <input type='password' name='password' placeholder='Password' onChange={handleChange} style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '10px' }} required/>
                <input type='password' name='confirmPassword' placeholder='Confirm Password' onChange={handleChange} style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '10px' }} required/>
                <select name='role' onChange={handleChange} style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '10px' }} required>
                    <option value=''>Select Role</option>
                    <option value='Admin'>Admin</option>
                    <option value='Recruiter'>Recruiter</option>
                    <option value='Delivery Manager'>Delivery Manager</option>
                    <option value='Finance/HR Ops'>Finance/HR Ops</option>
                </select>
                <button type='submit' style={{ width: '100%', padding: '10px', backgroundColor: '#333', color: 'white' }}>Signup</button>
            </form>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};

export default Signup;