import { FontIcon, PrimaryButton, Stack } from '@fluentui/react';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import config, { ROUTES_IDS } from '../../../../config';
import logo from '../../../assets/img/logo-apidae.svg';
import { useUserInfo } from '../../utils/hooks/useUserInfo';
import useRouteParams from '../../utils/hooks/useRouteParams';

const Header = (): JSX.Element => {
  const { user } = useUserInfo();
  const { routeId, parentsIds } = useRouteParams();

  return (
    <div className="pa-header">
      <div className="wrapper-inner">
        <Stack horizontal>
          <Stack.Item className="col logo-col" align="center">
            <Link
              to={config.routes[ROUTES_IDS.HOME].path as string}
              title="Afficher la page d'accueil"
            >
              <img src={logo} alt="Apidae" width={130} className="img-logo" />
            </Link>
          </Stack.Item>
          <Stack.Item className="col menu-asides-col" align="center">
            <Stack horizontal horizontalAlign="space-between">
              <Stack.Item className="col menu-col" align="center">
                <>
                  <nav className="menu">
                    <ul className="menu-items">
                      <li className="menu-item menu-item-3">
                        <Link
                          to={config.routes[ROUTES_IDS.TAB].path as string}
                          replace={routeId === ROUTES_IDS.TAB}
                        >
                          <FontIcon iconName="Table" className="menu-icon" />
                          <span>Tableau</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </>
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </div>
    </div>
  );
};
export default memo(Header);
