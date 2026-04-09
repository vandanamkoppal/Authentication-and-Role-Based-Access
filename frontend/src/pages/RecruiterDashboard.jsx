import Navbar from "../components/Navbar";

const RecruiterDashboard = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h2>Recruiter Dashboard</h2>
        <h3>My requirements</h3>
        <ul>
            <li>React Developer</li>
            <li>Node.js Developer - Open</li>
            <li>UI/UX Designer - Closed</li>
        </ul>
        </div>
    </div>
  );
};

export default RecruiterDashboard;