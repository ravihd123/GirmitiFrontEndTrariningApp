
export const questionsConstant = Object.freeze({

    TABLE_CONFIG: {
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
                ObjName: 'number',
                headerText: 'Number',
                columnType: 'text',
            },
            {
                ObjName: 'question',
                headerText: 'Questions',
                columnType: 'text',
            }
        ],
        displayedColumns: ['number', 'question', 'action'],

    },

});

export interface QuestionsElement {
    number: string;
    question: string;
}



export const ELEMENT_DATA: QuestionsElement[] = [{ question: 'Test Quesion 1', number: '1' }, { question: 'Test Quesion 2', number: '2' }]
