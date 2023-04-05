import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import config, { ROUTES_IDS } from '../../../config';
import Layout from '../Layout';
//import { useIsADisabledRole } from '../utils/hooks/useIsADisabledRole';
//import { useIsAExpiredRole } from '../utils/hooks/useIsAExpiredRole';
import { useUserInfo } from '../utils/hooks/useUserInfo';
//import UserConfirmation from './UserConfirmation';

const Homepage = lazy(() => import('../Homepage'));
const NotFound = lazy(() => import('../NotFound'));
const Tab = lazy(() => import('../Tab'));
const ProtectedRoute = lazy(() => import('./ProtectedRoute'));

const MyRouter = (): JSX.Element | null => {
  const { token } = useUserInfo();
  console.log('path tab', config.routes.home.path);

  return (
	<Router>
		<Layout>
			<Switch>
				<Route path={config.routes.home.path}>
					<Homepage />
				</Route>
				<Switch>
					<ProtectedRoute 
						path={config.routes[ROUTES_IDS.TAB].path}
						element={<Tab />}
					/>
					{/* <ProtectedRoute
						path={config.routes[ROUTES_IDS.DIRECTORY].path as string}
						exact
						component={Directory}
					/> */}
					{/* <ProtectedRoute
						path={config.routes[ROUTES_IDS.MY_SUBSCRIPTIONS].path}
						exact
						component={MySubscriptions}
						allowedRoles={['CHANNEL_SUBSCRIBER']}
					/> */}
				</Switch>
				<Route path="*" element={<NotFound />} />
			</Switch>
		</Layout>
	</Router>
  );
};

export default MyRouter;
