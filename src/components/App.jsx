import { lazy, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/selector';
import Example from './loading/loading';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { SharedLayout } from './SharedLayout'
import css from './App.module.css'
const LoginPage = lazy(() => import('../page/Login'));
const ContactsPage = lazy(() => import('../page/Contacts'));
const RegisterPage = lazy(() => import('../page/Register'));
const HomePage = lazy(() => import('../page/Home'));


export const App = () => {
  const dispatch = useDispatch()
  const refreshing  = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return !refreshing ? (
  <div className={css.conteine}>
    <div className={css.conteiner}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index  element={<HomePage />} />
        {/* <Route  path="/contacts"  element={<ContactsPage />}></Route>
        <Route  path="/register"  element={<RegisterPage />}></Route>
        <Route  path="/login"  element={<LoginPage />}></Route> */}
          <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
          <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
          <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        </Route>
      </Routes>
    </div>
  </div>
  ): (<Example type={'balls'} color={'red'}/>)
    
  
}
