
export const trainingConstant = Object.freeze({

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
                ObjName: 'trainingName',
                headerText: 'Training Name',
                columnType: 'text',
            },
            {
                ObjName: 'category',
                headerText: 'Category',
                columnType: 'text',
            },
            {
                ObjName: 'subCategory',
                headerText: 'Sub-Category',
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
                ObjName: 'status',
                headerText: 'Status',
                columnType: 'text',
            }
        ],
        displayedColumns: ['trainingName', 'category', 'subCategory', 'status', 'createdAt', 'updatedAt', 'action'],

    },
    USER_GRID_CONFIG: {
        columnInfo: [
            {
                ObjName: 'trainingName',
                headerText: 'Training Name',
                columnType: 'text',
            },
            {
                ObjName: 'category',
                headerText: 'Category',
                columnType: 'text',
            },
            {
                ObjName: 'subCategory',
                headerText: 'Sub-Category',
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
            }
        ],
        displayedColumns: ['trainingName', 'category', 'subCategory'],

    },

});


export class TrainingListConstants {

    static DeleteTraining = {
        URL: '/training/deleteTraining/'
    }
}




export interface PeriodicElement {
    trainingName?: string;
    category?: string;
    subCategory?: string;
    __v?: number;
    status?: string;
    createdBy?: string;
    _id?: string;
    createdAt?: string;
    updatedAt?: string;


}

export const ELEMENT_DATA: PeriodicElement[] = [{ "_id": "5ebfa91e31499d242429d783", "trainingName": "Sample", "category": "FrontEnd", "subCategory": "Programming", "status": "active", "createdBy": "Admin", "createdAt": "2020-05-16T08:49:35.332Z", "updatedAt": "2020-05-16T08:49:35.332Z", "__v": 0 }, { "_id": "5ebfa92931499d242429d784", "trainingName": "Sample1", "category": "FrontEnd", "subCategory": "Programming", "status": "active", "createdBy": "Admin", "createdAt": "2020-05-16T08:49:46.002Z", "updatedAt": "2020-05-16T08:49:46.002Z", "__v": 0 }, { "_id": "5ec211fc00fd0323d4675905", "trainingName": "Sample143", "category": "FrontEnd", "subCategory": "Programming", "status": "active", "createdBy": "Admin", "createdAt": "2020-05-18T04:41:32.575Z", "updatedAt": "2020-05-18T04:41:32.575Z", "__v": 0 }, { "_id": "5ec2143500fd0323d4675907", "trainingName": "Sample1433", "category": "FrontEnd", "subCategory": "Programming", "status": "active", "createdBy": "Admin", "createdAt": "2020-05-18T04:51:01.960Z", "updatedAt": "2020-05-18T04:51:01.960Z", "__v": 0 }, { "_id": "5ec2148300fd0323d4675908", "trainingName": "Sample14033", "category": "FrontEnd", "subCategory": "Programming", "status": "active", "createdBy": "Admin", "createdAt": "2020-05-18T04:52:20.085Z", "updatedAt": "2020-05-18T04:52:20.085Z", "__v": 0 }, { "_id": "5ec2154800fd0323d4675909", "trainingName": "Sample140033", "category": "FrontEnd", "subCategory": "Programming", "status": "active", "createdBy": "Admin", "createdAt": "2020-05-18T04:55:36.881Z", "updatedAt": "2020-05-18T04:55:36.881Z", "__v": 0 }, { "_id": "5ec21ac300fd0323d467590a", "trainingName": "Sample1400033", "category": "FrontEnd", "subCategory": "Programming", "status": "active", "createdBy": "Admin", "createdAt": "2020-05-18T05:19:22.020Z", "updatedAt": "2020-05-18T05:19:22.020Z", "__v": 0 }]