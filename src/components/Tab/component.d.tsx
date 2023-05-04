import { IColumn } from "@fluentui/react";
import { ITabItem } from "./container.d";

export declare type onFilterChangeByName = (value?: string) => void;
export declare type onFilterChangeByFirstName = (value?: string) => void;

export declare type onSort = (_: {
    fieldName: string;
    isSortedDescending: boolean;
  }) => void;

export interface ITab {
    sortedItems: ITabItem[];
    columns?: IColumn[];
}