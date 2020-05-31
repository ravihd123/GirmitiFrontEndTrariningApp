import { Component, OnInit } from '@angular/core';
import { MatTableConfig } from 'src/app/shared/custom-mat-table/mat-table.module';
import { QuestionListService } from 'src/app/services/main/trainings/question-list/question-list.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  tableConfig: MatTableConfig;
  testtabledata: any;
  headerLabel = "Questions"
  showAddQuestins = false;

  constructor(
    private questionSrv: QuestionListService,
    public dialogRef: MatDialogRef<QuestionListComponent>
  ) { }

  ngOnInit(): void {
    this.getMattableConfig();
    this.getMattableData();
  }


  getMattableConfig() {
    this.tableConfig = this.questionSrv.getMattableConfig();
    // console.log(this.tableConfig,);
  };
  getMattableData() {
    this.testtabledata = this.questionSrv.getMattableData();
  }

  addQuestions(): any {
    this.showAddQuestins = true;
  }

  backToList(): any {
    this.showAddQuestins = false;
  }

  closeDailogRef() {
    this.dialogRef.close();

  }
  selectedTableROw(event){

  }


}
