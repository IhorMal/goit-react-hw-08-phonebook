import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { isLoggedIn, selectIsRefreshing } from 'redux/selector';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {

  const refreshing = useSelector(selectIsRefreshing)
  const loggedIn = useSelector(isLoggedIn)
  const shouldRedirect = !loggedIn && !refreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
