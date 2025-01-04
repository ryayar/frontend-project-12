import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { routes } from '../store/utils/routes.js';

const ProtectedRoute = () => {
  const token = useSelector((state) => state.auth.token);
  return token ? <Outlet /> : <Navigate to={routes.login} replace />;
};

export default ProtectedRoute;
