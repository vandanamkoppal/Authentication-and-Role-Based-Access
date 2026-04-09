import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';
import DeliveryManagerDashboard from './pages/DeliveryManagerDashboard';
import FinanceDashboard from './pages/FinanceDashboard';
import Unauthorized from './pages/Unauthorized';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/unauthorized" />;
  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/recruiter" element={
            <ProtectedRoute allowedRoles={['Recruiter']}>
              <RecruiterDashboard />
            </ProtectedRoute>
          } />
          <Route path="/delivery" element={
            <ProtectedRoute allowedRoles={['Delivery Manager']}>
              <DeliveryManagerDashboard />
            </ProtectedRoute>
          } />
          <Route path="/finance" element={
            <ProtectedRoute allowedRoles={['Finance/HR Ops']}>
              <FinanceDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;