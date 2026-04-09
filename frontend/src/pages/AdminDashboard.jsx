import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  return (
    <div style={{background:'#f5f7fa', minHeight: '100vh'}}>
      <Navbar />
      <div style={{ padding: '20px' ,fontFamily: 'Arial'}}>
        <h2 style={{color: '#1a1a2e', borderBottom: '2px solid #e94560', paddingBottom: '10px',  marginBottom: '25px' }}>Admin Dashboard</h2>
        <p style={{ color: '#666' , marginBottom: '25px'}}>Mange all users - active or deactiate</p>
        <table style={{
          width: '100%', borderCollapse: 'collapse',
          backgroundColor: 'white', borderRadius: '8px',
          overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.08)'}}>
            <thead>
                <tr>
              {['Name','Email','Role','Status','Action'].map(h => (
                <th key={h} style={{
                  backgroundColor: '#1a1a2e', color: 'white',
                  padding: '12px', textAlign: 'left'
                }}>{h}</th>
              ))}
            </tr>
            </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Test User</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>test@email.com</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Recruiter</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <span style={{
                  background: '#d4edda', color: '#155724',
                  padding: '3px 10px', borderRadius: '12px', fontSize: '13px'
                }}>Active</span>
              </td>
              <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                <button style={{
                  background: '#e94560', color: 'white',
                  border: 'none', borderRadius: '4px',
                  padding: '6px 12px', cursor: 'pointer'
                }}>Deactivate</button>
              </td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;