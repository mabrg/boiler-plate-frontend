import { ITabItem } from '../container.d';

export const mapTabItems = (data? : ITabItem[]) : ITabItem[] => {
    if(!data) return [];

    return data.map(
        (item): ITabItem => ({
            id: item?.id, 
            name: item?.name,
            first_name: item?.first_name,
        }),
    );
};

