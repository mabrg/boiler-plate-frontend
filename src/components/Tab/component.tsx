import { FontIcon } from '@fluentui/react';
import classNames from 'classnames';
import React, { memo, useCallback, useState } from 'react';

import config, { ROUTES_IDS } from '../../../config';
import { useUserInfo } from '../utils/hooks/useUserInfo';
import { ITab } from './component.d';

const Tab = ({
    items
}: ITab): JSX.Element => {
  const { user } = useUserInfo();
  console.log('user', user);
    return (
        <>
            <h1>
                Welcome Boys ! This is the Tab page ! 
                <FontIcon iconName="AddTable" className="addtable-icon" />
            </h1>
            <div>
                <h2>The Tab :</h2>
            </div>
            {user && (
                user.name
            )}
        </>
    );
};
export default memo(Tab);