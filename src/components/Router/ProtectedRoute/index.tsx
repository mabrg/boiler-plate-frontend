import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useUserAllowedRoles } from '../../utils/hooks/useUserAllowedRoles';
import { useUserInfo } from '../../utils/hooks/useUserInfo';

type ProtectedRouteProps = RouteProps & {
  allowedRoles?: string[];
};

const ProtectedRoute = ({
  allowedRoles = [],
  ...props
}: ProtectedRouteProps): JSX.Element => {
  const { token, user } = useUserInfo();
  const isAuthorized = useUserAllowedRoles(...allowedRoles);
  console.log(props)

  if (
    !token ||
    !user ||
    !(allowedRoles.length === 0 || isAuthorized)
  ) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return <Route {...props} />;
};

export default ProtectedRoute;
