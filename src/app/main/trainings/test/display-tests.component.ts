import { Component, OnInit, Input } from '@angular/core';
import { TestService } from '../../../services/main/trainings/test/test.service';
import { MatTableConfig } from '../../../shared/custom-mat-table/mat-table.module';
import { TestformComponent } from './testform/testform.component';
import { MatDialog } from '@angular/material/dialog';
import { QuestionListComponent } from './question-list/question-list.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { AddtestService } from '../../../services/main/trainings/test/addtest/addtest.service';
import { PeriodicElement } from '../../../services/main/trainings/test/test-constant';
import { ToastService } from 'src/app/services/toast.service';
import { Utils } from 'src/app/shared/utilities/utils';



@Component({
  selector: 'app-display-tests',
  templateUrl: './display-tests.component.html',
  styleUrls: ['./display-tests.component.scss']
})
export class DisplayTestsComponent implements OnInit {
  tableConfig: MatTableConfig;
  testtabledata: any;
  array_Testformdata: any = [];
  gettestdata: any;
  alignHeader = 'start'
  @Input() trainingIdfromlist: any
  train_id: any;
  trainingname: string;
  headerLabel: string;
  isEdit: boolean;
  testconfigvalu: any;
  testlists: any;




  constructor(private testservice: TestService,
    private addtestsrv: AddtestService,
    private dialog: MatDialog,
    private toastservice : ToastService,

  ) { }

  ngOnInit(): void {
    this.addtestsrv.gettrainingid(this.trainingIdfromlist);
    this.testservice.getTrainingId(this.trainingIdfromlist);
    this.headerLabel = 'Test for ' + this.trainingIdfromlist.trainingName;

    this.getMattableConfig();
    this.getMattableData();

  }

  getMattableConfig() {
    this.tableConfig = this.testservice.getMattableConfig();
  };
  getMattableData() {
    this.testservice.getMattableData().subscribe(res => {
    this.testlists=res.list;
    this.testlists.forEach(element => {
      if(element['status']==true){
        element['status']="Active"
      }
      else{
        element['status']="InActive"

      }
    });
      this.testtabledata = Utils.CONVERT_DATE_FORMATE(this.testlists);
      
    })
  }

  // ADDING TEST
  addtest() {
    const dialogrefer= this.dialog.open(TestformComponent, {
      width: "400px", disableClose: true,
    })
    dialogrefer.afterClosed().subscribe(()=>{
      this.getMattableData();
    });
    
  };

  // ON SELECTING ACTIONS(EDIT OR DELETE)
  selectedOption(event) {
    console.log('Editevent', event);
    if (event.action == "Edit") {
      const dialogreference= this.dialog.open(TestformComponent, {
        width: "400px",
        data: event, disableClose: true
      });
      dialogreference.afterClosed().subscribe(res => {
        this.getMattableData();

      })
    }
    else {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: "400px", data: this.deleteData()
      });
      dialogRef.afterClosed().subscribe(res => {
        console.log("Deletable data", res);
        if (res == 'Yes') {
          this.callDeleteTestApi(event);
        }
          this.getMattableData();
        
      })
      
    }
  };


  callDeleteTestApi(event){
    this.testservice.deleteTestlist(event).subscribe(()=>{
      this.toastservice.showToastMsg("Test Deleted Successfully");
    })
  }

  deleteData() {
    return {
      title: "Confirm",
      confirmMessage: 'Do you want to delete this Test'
    }
  }


  // ON SELECTING TABLE ROW

  selectedTableROw(row): any {
    const dailogRef = this.dialog.open(QuestionListComponent, {
      width: "800px",
      data: row
    });

  }



}
