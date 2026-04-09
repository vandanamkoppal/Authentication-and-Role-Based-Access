import Navbar from "../components/Navbar";

const RecruiterDashboard = () => {
  const requirements = [
    { title: 'React Developer', status: 'Open' },
    { title: 'Node.js Developer', status: 'Open' },
    { title: 'UI/UX Designer', status: 'Closed' },
  ];
  return (
    <div style={{ backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2 style={{
          color: '#1a1a2e',
          borderBottom: '3px solid #e94560',
          paddingBottom: '10px', marginBottom: '25px'
        }}>Recruiter Dashboard</h2>
        <h3 style={{ color: '#444', marginBottom: '15px' }}>My requirements</h3>
        {requirements.map((req, i) => (
          <div key={i} style={{
            background: 'white', padding: '15px 20px',
            borderRadius: '8px', marginBottom: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            display: 'flex', justifyContent: 'space-between'
          }}>
            <span style={{ fontWeight: 'bold', color: '#1a1a2e' }}>{req.title}</span>
            <span style={{
              background: req.status === 'Open' ? '#d4edda' : '#f8d7da',
              color: req.status === 'Open' ? '#155724' : '#721c24',
              padding: '3px 12px', borderRadius: '12px', fontSize: '13px'
            }}>{req.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruiterDashboard;