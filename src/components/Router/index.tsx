import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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

const MyRoutes = 
[
	<Route path={config.routes[ROUTES_IDS.HOME].path} element={<Homepage/>}/>,
	<Route path={config.routes[ROUTES_IDS.TAB].path} element={<Tab/>}/>,
	<Route path='/test' element={<ProtectedRoute allowedRoles={['toto']}><Tab/></ProtectedRoute>}/>
];

const MyRouter = (): JSX.Element => {
	const { token, user } = useUserInfo();
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					{MyRoutes}
				</Routes>
			</Layout>
     	</BrowserRouter>
	);
};

export default MyRouter;
