 
import { useDispatch } from 'react-redux'; 
import { lazy, useEffect } from 'react'; 
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './Layout';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
 
const HomePage = lazy(() => import('../components/Home/Home'));
const RegisterPage = lazy(() => import('../components/Register/Register'));
const LoginPage = lazy(() => import('../components/Login/Login'));
const ContactPage = lazy(() => import('../components/Contacts/Contacts'));
  
export const App = () => {
     
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
      dispatch(refreshUser());
    }, [dispatch]);


    return isRefreshing ? (
      <b> Loading user data...</b>
    ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactPage />} />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }
 
