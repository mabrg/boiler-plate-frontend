import { FontIcon } from '@fluentui/react';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';

import config, { ROUTES_IDS } from '../../../config';
import { useUserInfo } from '../utils/hooks/useUserInfo';

const Homepage = (): JSX.Element => {
  const { user } = useUserInfo();
    return (
        <>
            <h1>Hello World Boys !</h1>
            <div>
                <h2>Homepage</h2>
            </div>
            {user && (
                user.name
            )}
        </>
    );
};
export default Homepage;