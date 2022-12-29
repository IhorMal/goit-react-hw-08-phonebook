import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from 'redux/selector';


export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const LoggedIn = useSelector(isLoggedIn)

  return LoggedIn ? <Navigate to={redirectTo} /> : Component;
};
