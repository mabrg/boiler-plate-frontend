import { buildColumns, DetailsList, FontIcon, IColumn, Image, ImageFit, Link, mergeStyles } from '@fluentui/react';
import React, { memo } from 'react';

import { useUserInfo } from '../utils/hooks/useUserInfo';
import { ITab } from './component.d';
import { ITabItem } from './container.d';

const columns = [
    {
        key: 'name',
        name: 'Name',
        fieldName: 'name',
        sortable: true,

    },
    {
        key: 'first_name',
        name: 'First Name',
        fieldName: 'first_name',
        sortable: true,
    },
];
export default class Tab extends React.Component<{items : ITabItem[]}, ITab> {
	constructor(props: {items : ITabItem[]}) {
		super(props);

		this.state = {
			sortedItems: props?.items,
			columns: this._buildColumns(props.items),
		};
	}

	public render() {
		const { sortedItems, columns } = this.state;

		return (
			<DetailsList
				items={sortedItems}
				setKey="set"
				columns={columns}
				onRenderItemColumn={_renderItemColumn}
				onItemInvoked={this._onItemInvoked}
				onColumnHeaderContextMenu={this._onColumnHeaderContextMenu}
				ariaLabelForSelectionColumn="Toggle selection"
				ariaLabelForSelectAllCheckbox="Toggle selection for all items"
				checkButtonAriaLabel="select row"
			/>
		);
	}

	private _onColumnClick = (event: React.MouseEvent<HTMLElement>, column: IColumn): void => {
		const { columns } = this.state;
		let { sortedItems } = this.state;
		let isSortedDescending = column.isSortedDescending;

		// If we've sorted this column, flip it.
		if (column.isSorted) {
			isSortedDescending = !isSortedDescending;
		}

		// Sort the items.
		sortedItems = _copyAndSort(sortedItems, column.fieldName!, isSortedDescending);

		// Reset the items and columns to match the state.
		this.setState({
			sortedItems: sortedItems,
			columns: columns.map(col => {
				col.isSorted = col.key === column.key;

				if (col.isSorted) {
					col.isSortedDescending = isSortedDescending;
				}

				return col;
			}),
		});
	};

	private _buildColumns(items: ITabItem[]): IColumn[] {
		const columns = buildColumns(items, false, this._onColumnClick);
		console.log('column def', columns)
		
		// Indicate that all columns except thumbnail column can be sorted,
		// and only the description colum should disappear at small screen sizes
		columns.forEach((column: IColumn) => {
			if (column.name) {
				column.showSortIconWhenUnsorted = true;
				column.isCollapsible = column.name === 'description';
			}
		});

		return columns;
	}

	private _onColumnHeaderContextMenu(column: IColumn | undefined, ev: React.MouseEvent<HTMLElement> | undefined): void {
		console.log(`column ${column!.key} contextmenu opened.`);
	}

	private _onItemInvoked(item: any, index: number | undefined): void {
		alert(`Item ${item.name} at index ${index} has been invoked.`);
	}
}
  
function _renderItemColumn(item: ITabItem, index: number, column: IColumn) {
	const fieldContent = item[column.fieldName as keyof ITabItem] as string;

	switch (column.key) {
		case 'thumbnail':
			return <Image src={fieldContent} width={50} height={50} imageFit={ImageFit.cover} />;

		case 'name':
			return <Link href="#">{fieldContent}</Link>;

		case 'color':
			return (
				<span
					data-selection-disabled={true}
					className={mergeStyles({ color: fieldContent, height: '100%', display: 'block' })}
				>
					{fieldContent}
				</span>
			);

		default:
			return <span>{fieldContent}</span>;
	}
}

function _copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
	const key = columnKey as keyof T;
	return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
}
  