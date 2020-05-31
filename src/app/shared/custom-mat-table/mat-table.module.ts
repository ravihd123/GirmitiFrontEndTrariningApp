export interface MatTableConfig {
    columnInfo: IColumnInfo[];
    displayedColumns: string[];
}

export interface IColumnInfo {
    headerText?: string;
    ObjName: string;
    columnType: ColumnType | string;
    dropDownOptions?: IDropDownOptions[];
    columnWidth?: string;

}

export interface IDropDownOptions {
    value?: any;
}

export enum ColumnType {
    TEXT = 'text',
    DROP_DOWN = 'drop-down'
}



export const adminGroupConstants = Object.freeze({

    GRID_CONFIG: {
        columnInfo: [
            {
                ObjName: 'action',
                headerText: 'Action',
                columnType: 'drop-down',
                dropDownOptions: [
                    {
                        value: 'Edit',
                    },
                    {
                        value: 'Disable',

                    }
                ]
            },

            {
                ObjName: 'position',
                headerText: 'No',
                columnType: 'text',
            },
            {
                ObjName: 'name',
                headerText: 'Name',
                columnType: 'text',
            },
            {
                ObjName: 'weight',
                headerText: 'Weight',
                columnType: 'text',
            },
            {
                ObjName: 'symbol',
                headerText: 'Symbol',
                columnType: 'text',
            }
        ],
        displayedColumns: ['position', 'name', 'weight', 'symbol', 'action' ],

    },
});
