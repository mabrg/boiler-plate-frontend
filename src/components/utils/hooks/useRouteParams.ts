import get from 'lodash/get';
import { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import config from '../../../../config';
import { IRouterParams } from './useRouteParams.d';

const getParentsIds = (id: string): string[] => {
  return id
    ? [...getParentsIds(get(config.routes, `${id}.parent`, '') as string), id]
    : [];
};

const routeToParams = (pathname: string): Partial<IRouterParams> => {
  return Object.keys(config.routes)
    .filter((routeId) =>
      matchPath(
        {
          path: get(config.routes, `${routeId}.path`, '') as string,
          caseSensitive: true,
          end: true,
        },
        pathname
      ),
    )
    .slice(0, 1)
    .reduce((acc, routeId) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      const match = matchPath(
        {
          path: get(config.routes, `${routeId}.path`, '') as string,
          caseSensitive: true,
          end: true,
        },
        pathname
      );
      return {
        params: match ? match.params : {},
        ...config.routes[routeId],
        routeId,
        parentsIds: getParentsIds(routeId),
      };
    }, {});
};

const useRouteParams = (): Partial<IRouterParams> => {
  const { pathname } = useLocation();
  const params = useMemo(() => {
    return routeToParams(pathname);
  }, [pathname]);

  return params;
};

export default useRouteParams;
