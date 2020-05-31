import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TrainingService } from 'src/app/services/main/trainings/training.service';
import { MatTableConfig } from 'src/app/shared/custom-mat-table/mat-table.module';
import { PeriodicElement } from 'src/app/services/main/trainings/trianing-constant';
import { AddtrainingComponent } from './addtraining/addtraining.component';
import { CustomMatTableComponent } from 'src/app/shared/custom-mat-table/custom-mat-table.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { ToastService } from 'src/app/services/toast.service';
import { Utils } from 'src/app/shared/utilities/utils';


@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {
  tableConfig: MatTableConfig
  tableData: PeriodicElement;
  headerLabel = 'List of Trainings'
  showTrainingTab: boolean;
  contentHeader: string;
  reqtrainingid_for_testApi: any;
  reqtrainingid: any;
  isAdmin = 'false';

  constructor(
    private trainingSrv: TrainingService,
    public dialog: MatDialog,
    private toastSrv: ToastService

  ) { }

  ngOnInit(): void {
    this.showTrainingTab = true;
    this.isAdmin = Utils.GET_SESSION_STORAGE('isAdmin');
    this.getTableCOnfig();
    this.getTableData();
  }

  private getTableCOnfig() {
    if(this.isAdmin === 'true'){
      this.tableConfig = this.trainingSrv.getTableConfig();
    } else {
      this.tableConfig = this.trainingSrv.getUserTableConfig();
    }
  }

  private getTableData() {
    this.trainingSrv.getTableData().subscribe(
      (data) => {
        this.tableData = Utils.CONVERT_DATE_FORMATE(data);
      }
    )
  }


  addTraining() {
    const dialogRef = this.dialog.open(AddtrainingComponent, { width: "400px", disableClose: true })
    dialogRef.afterClosed().subscribe(data => {
      this.getTableData();
    }
    )
  }


  selectedTableROw(event) {
    this.contentHeader = event;
    this.reqtrainingid = event
    this.showTrainingTab = false
  }

  selectedOption(event) {
    if (event.action === "Edit") {
      const dialogRef = this.dialog.open(AddtrainingComponent, { width: "400px", data: event, disableClose: true })
      dialogRef.afterClosed().subscribe(data => {
        this.getTableData();
      });
    } else {
      this.deleteTraining(event);
    }
  }

  private deleteTraining(event) {
    const dialogRef = this.callDeleteDailog();
    dialogRef.afterClosed().subscribe(
      (data) => {
        if (data === 'Yes') {
          this.callDeleteApi(event);
        }
        this.getTableData();
      }
    );
  }

  private callDeleteApi(event) {
    this.trainingSrv.deleteTraining(event).subscribe(
      () => {
        this.toastSrv.showToastMsg("Deleted Sucessfully")
      });
  }

  private callDeleteDailog(): any {
    return this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: this.getData(),
      disableClose: true
    });
  }

  private getData() {
    // add these constants to resource constant
    return {
      title: 'Confirm',
      confirmMessage: 'Do you want to delete this training'
    }
  }
}
