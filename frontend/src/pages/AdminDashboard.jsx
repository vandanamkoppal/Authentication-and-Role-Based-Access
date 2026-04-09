import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h2>Admin Dashboard</h2>
        <p>Mange all users - active or deactiate</p>
        <table border="1" width="100%" cellPadding="8">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Test User</td>
                    <td>test@email.com</td>
                    <td>Recruiter</td>
                    <td>Active</td>
                    <td><button>Deactivate</button></td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;