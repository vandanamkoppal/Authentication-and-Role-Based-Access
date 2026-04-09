import Navbar from '../components/Navbar';

const FinanceDashboard = () => {
  return (
    <div style={{ backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '30px', fontFamily: 'Arial' }}>
        <h2 style={{
          color: '#1a1a2e',
          borderBottom: '3px solid #e94560',
          paddingBottom: '10px', marginBottom: '10px'
        }}>Finance / HR Ops Dashboard</h2>
        <p style={{
          color: 'white', background: '#e94560',
          display: 'inline-block', padding: '4px 12px',
          borderRadius: '12px', fontSize: '13px', marginBottom: '20px'
        }}>Read-only access</p>
        <table style={{
          width: '100%', borderCollapse: 'collapse',
          backgroundColor: 'white', borderRadius: '8px',
          overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
        }}>
          <thead>
            <tr>
              {['Employee','Role','Department','Status'].map(h => (
                <th key={h} style={{
                  backgroundColor: '#1a1a2e', color: 'white',
                  padding: '12px', textAlign: 'left'
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>John Doe</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Recruiter</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>HR</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <span style={{
                  background: '#d4edda', color: '#155724',
                  padding: '3px 10px', borderRadius: '12px', fontSize: '13px'
                }}>Active</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinanceDashboard;