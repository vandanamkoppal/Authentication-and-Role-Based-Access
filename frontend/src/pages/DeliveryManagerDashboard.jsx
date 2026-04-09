import Navbar from "../components/Navbar";

const DeliveryManagerDashboard = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h2>Delivery Manager Dashboard</h2>
        <h3>Team Overview</h3>
        <ul>
            <li>Team A - 5 members</li>
            <li>Team B - 3 members</li>
            <li>Team C - 4 members</li>
        </ul>
        </div>
    </div>
  );
};

export default DeliveryManagerDashboard;