import defaults from 'lodash/defaults';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import Tab from './component';
import {
    ITabItem,
} from './container.d';
import {
    mapTabItems,
} from './utils/mappers';

function TabContainer(): JSX.Element {
    const data = "";
    const tabItems = useMemo<ITabItem[]>(() => {
        if (data) return mapTabItems(data);
        return [];
    }, [data]);

    return (
        <>
            <Tab 
                items={tabItems}
            />
        </>
    );
}

export default memo(TabContainer);