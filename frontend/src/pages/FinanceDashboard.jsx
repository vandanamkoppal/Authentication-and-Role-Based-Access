import Navbar from "../components/Navbar";

const FinanceDashboard = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h2>Finance/HR Ops Dashboard</h2>
        <p style={{color: 'gray'}}>Read-only access</p>
        <table border="1" width="100%" cellPadding="8">
            <thead>
                <tr>
                    <th>Employee</th>
                    <th>Role</th>
                    <th>Department</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John</td>
                    <td>Recruiter</td>
                    <td>HR</td>
                    <td>Active</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinanceDashboard;