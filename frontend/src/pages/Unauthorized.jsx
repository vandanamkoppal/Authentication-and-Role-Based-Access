import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();
  return (
    <div style={{
      textAlign: 'center', marginTop: '100px', fontFamily: 'Arial'
    }}>
      <h1 style={{ color: '#e94560', fontSize: '72px', margin: '0' }}>403</h1>
      <h2 style={{ color: '#1a1a2e' }}>Unauthorized Access</h2>
      <p style={{ color: '#666' }}>You don't have permission to view this page</p>
      <button onClick={() => navigate('/login')} style={{
        padding: '12px 30px', background: '#1a1a2e',
        color: 'white', border: 'none', borderRadius: '6px',
        cursor: 'pointer', fontSize: '16px', marginTop: '20px'
      }}>Go to Login</button>
    </div>
  );
};

export default Unauthorized;