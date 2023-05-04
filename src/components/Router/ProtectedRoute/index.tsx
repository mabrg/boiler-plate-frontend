import { RouteProps, Navigate } from 'react-router-dom';
import config, { ROUTES_IDS } from '../../../../config';

import { useUserAllowedRoles } from '../../utils/hooks/useUserAllowedRoles';
import { useUserInfo } from '../../utils/hooks/useUserInfo';

type ProtectedRouteProps = RouteProps & {
  allowedRoles?: string[];
  children: JSX.Element;
};

const ProtectedRoute = ({
  allowedRoles = [],
  children,
}: ProtectedRouteProps): JSX.Element => {
  const { token, user } = useUserInfo();
  const isAuthorized = useUserAllowedRoles(...allowedRoles);

  console.log(allowedRoles)

  if (
    !token ||
    !(user) ||
    !(allowedRoles.length === 0 || isAuthorized)
  ) {
    return (
      <Navigate to={config.routes[ROUTES_IDS.HOME].path}/>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return children;
};

export default ProtectedRoute;
