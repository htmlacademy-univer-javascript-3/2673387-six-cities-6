import {Navigate} from 'react-router-dom';
import {ReactNode} from 'react';
import {AppRoute, AuthStatus} from '../../const.ts';


type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: ReactNode;
};

function PrivateRoute({ children, authStatus }: PrivateRouteProps) {

  if (authStatus === AuthStatus.Authorised) {
    return children;
  } else {
    return <Navigate to={AppRoute.Login} />;
  }
}

export default PrivateRoute;
