import { memo, useMemo } from 'react';
import Tab from './component';
import {
    ITabItem,
} from './container.d';
import {
    mapTabItems,
} from './utils/mappers';

function TabContainer(): JSX.Element {
    const data = [{"id": 1,"name":"item1","first_name":"Item 1"},{"id": 2,"name":"item2","first_name":"Item 2"},{"id": 3,"name":"item3","first_name":"Item 3"}];
    const tabItems = useMemo<ITabItem[]>(() => {
        if (data) return mapTabItems(data);
        return [];
    }, [data]);

    return (
        <>
            <p>Là, c'est le banquet des chefs de clan</p>
            <Tab 
                items={tabItems}
            />
        </>
    );
}

export default memo(TabContainer);