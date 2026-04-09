import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ padding: '15px 30px', backgroundColor: 'linear-gradient(to right, #1a1a2e, #16213e)', color: '#570505' ,display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h3 style={
          {margin: 0}}>Code Studio ATS</h3>
        {user && (
            <div>
                <span>Welcome, {user.name} | Role: ({user.role})</span>
                <button onClick={handleLogout} style={{ marginLeft: '15px', padding: '8px 16px', backgroundColor: '#240309', border: 'none', color: '#f9f7f7', cursor: 'pointer' }}>Logout</button>
            </div>
        )}
    </nav>
  );
};

export default Navbar;