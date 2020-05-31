
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
                ObjName: 'contentName',
                headerText: 'Content Name',
                columnType: 'text',
            },
            {
                ObjName: 'contentDescription',
                headerText: 'Content Description',
                columnType: 'text',
            },
            {
                ObjName: 'createdAt',
                headerText: 'Created Date',
                columnType: 'text',
            },
            {
                ObjName: 'updatedAt',
                headerText: 'Updated Date',
                columnType: 'text',
            },
            {
                ObjName: 'file',
                headerText: 'Files',
                columnType: 'button',
            },
            {
                ObjName: 'status',
                headerText: 'Status',
                columnType: 'text',
            }
        ],
        displayedColumns: ['contentName', 'contentDescription', 'createdAt', 'updatedAt', 'status', 'file', 'action'],

    },
    USER_GRID_CONFIG: {
        columnInfo: [
            {
                ObjName: 'contentName',
                headerText: 'Content Name',
                columnType: 'text',
            },
            {
                ObjName: 'contentDescription',
                headerText: 'Content Description',
                columnType: 'text',
            },
            {
                ObjName: 'file',
                headerText: 'Files',
                columnType: 'button',
            }
        ],
        displayedColumns: ['contentName', 'contentDescription', 'file'],

    }

});

export interface PeriodicElement {
    name: string;
    contentDesc: string;
    type: string;
    duration: string;
    status: string
}

export const ELEMENT_DATA: PeriodicElement[] = [
    { name: "HTML", contentDesc: "Markup language", type: "Pdf", duration: "60min", status: 'Active' },
    { name: "CSS", contentDesc: "Styling markup", type: "Pdf", duration: "40min", status: 'Inactive' },
    { name: "Javascript", contentDesc: "Functionality", type: "Video", duration: "50min", status: 'Active' },
    { name: "Bootstrap", contentDesc: "Framework", type: "Audio", duration: "80min", status: 'Active' },
    { name: "Angular", contentDesc: "Framework", type: "Video", duration: "30min", status: 'Inactive' }
];