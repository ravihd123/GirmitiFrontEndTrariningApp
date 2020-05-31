// import { OnInit } from '@angular/core';

export const testConstant = Object.freeze({

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
                ObjName: 'testName',
                headerText: 'Test Name',
                columnType: 'text',
            },
            {
                ObjName: 'difficultyLevel',
                headerText: 'Difficulty Level',
                columnType: 'text',
            },
            {
                ObjName: 'numberOfQuestions',
                headerText: 'Number of Questions',
                columnType: 'text',
            },
            {
                ObjName: 'passMarks',
                headerText: ' Pass Marks',
                columnType: 'text',
            },
            {
                ObjName: 'totalMarks',
                headerText: 'Total Marks',
                columnType: 'text',
            },
            {
                ObjName: 'status',
                headerText: 'Status',
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
                ObjName: 'questions',
                headerText: 'Questions',
                columnType: 'addbutton',
            }



        ],
        displayedColumns: ['testName', 'difficultyLevel','numberOfQuestions', 'passMarks','totalMarks','status','createdAt','updatedAt','questions', 'action',],

    },

});

export interface PeriodicElement {
    forEach(arg0: (element: any) => void);
    list: any;
    difficultyLevel?: string,
    numberOfAttempts?: number,
    numberOfQuestions?: number,
    passMarks?: number,
    testName?: string,
    totalMarks?: number,
    createdAt?: string,
    updatedAt?: string,
    status?:boolean,
}

export const ELEMENT_DATA: PeriodicElement[] = [
    // {testname:'Sample ', difficultylevel:'Medium', numberofque:'20' , pass:'13/20', status:'Active',questions:'Add'},
    // {testname:'Sample1', difficultylevel:'Hard', numberofque:'20' , pass:'13/20', status:'InActive',questions:'Add'},
    // {testname:'Sample2', difficultylevel:'Easy', numberofque:'20' , pass:'13/20', status:'Active',questions:'Add'},
    // {testname:'Sample3', difficultylevel:'Medium', numberofque:'20' , pass:'13/20', status:'InActive',questions:'Add'},
    // {testname:'Sample4', difficultylevel:'Medium', numberofque:'20' , pass:'13/20', status:'Active',questions:'Add'},


];


