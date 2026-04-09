import Navbar from '../components/Navbar';

const DeliveryManagerDashboard = () => {
  const teams = [
    { name: 'Team A', members: 5 },
    { name: 'Team B', members: 3 },
    { name: 'Team C', members: 4 }
  ];

  return (
    <div style={{ backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '30px', fontFamily: 'Arial' }}>
        <h2 style={{
          color: '#1a1a2e',
          borderBottom: '3px solid #e94560',
          paddingBottom: '10px', marginBottom: '25px'
        }}>Delivery Manager Dashboard</h2>
        <h3 style={{ color: '#444', marginBottom: '15px' }}>Team Overview</h3>
        {teams.map((team, i) => (
          <div key={i} style={{
            background: 'white', padding: '15px 20px',
            borderRadius: '8px', marginBottom: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            display: 'flex', justifyContent: 'space-between'
          }}>
            <span style={{ fontWeight: 'bold', color: '#1a1a2e' }}>{team.name}</span>
            <span style={{ color: '#666' }}>{team.members} members</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryManagerDashboard;