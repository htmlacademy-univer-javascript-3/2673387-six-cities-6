import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import {AppRoute} from '../../const.ts';


type PrivateRouteProps = {
  children: ReactNode;
};

function PrivateRoute({ children }: PrivateRouteProps) {
  const isAuth = true;

  if (isAuth) {
    return children;
  } else {
    return <Navigate to={AppRoute.Login} />;
  }
}

export default PrivateRoute;
