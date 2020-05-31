
export const contentConstant = Object.freeze({

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
                        value: 'Delete',

                    }
                ]
            },

            {
                ObjName: 'name',
                headerText: 'Content Name',
                columnType: 'text',
            },
            {
                ObjName: 'description',
                headerText: 'Content Description',
                columnType: 'text',
            },
            {
                ObjName: 'type',
                headerText: 'Content Type',
                columnType: 'text',
            },
            {
                ObjName: 'duration',
                headerText: 'Duration',
                columnType: 'text',
            },
            {
                ObjName: 'status',
                headerText: 'Status',
                columnType: 'text',
            },
            {
                ObjName: 'button',
                headerText: 'Content File',
                columnType: 'button',
            }


        ],
        displayedColumns: ['name', 'description', 'type', 'duration', 'status', 'button', 'action'],

    },

    USER_GRID_CONFIG: {
        columnInfo: [
            {
                ObjName: 'name',
                headerText: 'Content Name',
                columnType: 'text',
            },
            {
                ObjName: 'description',
                headerText: 'Content Description',
                columnType: 'text',
            },
            {
                ObjName: 'type',
                headerText: 'Content Type',
                columnType: 'text',
            },
            {
                ObjName: 'duration',
                headerText: 'Duration',
                columnType: 'text',
            },
            {
                ObjName: 'status',
                headerText: 'Status',
                columnType: 'text',
            },
            {
                ObjName: 'button',
                headerText: 'Content File',
                columnType: 'button',
            }
        ],
        displayedColumns: ['name', 'description', 'type', 'duration', 'button'],

    },

});

export interface PeriodicElement {
    name: string;
    description: string;
    type: string;
    duration: string;
    status: string
}

export const ELEMENT_DATA: PeriodicElement[] = [
    { name: "Angular Basic", description: "Functionality", type: "Video", duration: "50min", status: 'Active' },
    { name: "Angular Setup", description: "Framework", type: "Video", duration: "80min", status: 'Active' },
    { name: "Angular", description: "Framework", type: "Video", duration: "30min", status: 'Inactive' }
];