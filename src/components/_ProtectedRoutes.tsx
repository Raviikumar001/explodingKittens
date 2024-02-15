
import { Navigate, Outlet } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import { RootState } from '../Types'; // Adjust path to your store 

const ProtectedRoute = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  // If user is logged in (i.e., user object exists), display the route's content;
  // otherwise, redirect to the home route ('/')
  return user ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoute;