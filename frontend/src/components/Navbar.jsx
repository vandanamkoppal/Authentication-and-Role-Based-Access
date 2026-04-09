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
    <nav style={{ padding: '10px 20px', backgroundColor: '#333', color: '#fff' ,display: 'flex', justifyContent: 'space-between' }}>
        <h3>Code Studio ATS</h3>
        {user && (
            <div>
                <span>Welcome, {user.name} | Role: ({user.role})</span>
                <button onClick={handleLogout} style={{ marginLeft: '15px', padding: '5px 10px' }}>Logout</button>
            </div>
        )}
    </nav>
  );
};

export default Navbar;