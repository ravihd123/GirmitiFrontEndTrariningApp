import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableConfig } from 'src/app/shared/custom-mat-table/mat-table.module';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { FormComponent } from './content-form/content-form.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { Utils } from 'src/app/shared/utilities/utils';
import { ContentService } from 'src/app/services/main/trainings/contents/content.service';
import { ShowFileComponent } from 'src/app/shared/show-file/show-file.component';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'type', 'duration', 'status', 'action'];
  contentConfig: MatTableConfig;
  contentData;
  formData: any;
  alignHeader = 'start';
  isAdmin: string;
  @Input() headerContent;
  contentHeader: string;
  constructor(private contentServ: ContentService,
    private dialog: MatDialog,
    private toastService: ToastService) {

  }

  ngOnInit(): void {
    this.isAdmin = Utils.GET_SESSION_STORAGE('isAdmin');
    this.contentHeader = 'Content List for ' + this.headerContent.trainingName;
    this.contentConfig = this.contentServ.getContentConfig();
    this.getTableData();
    if(this.isAdmin === 'true'){
      this.contentConfig = this.contentServ.getContentConfig();
    } else {
      this.contentConfig = this.contentServ.getUserContentConfig();
    }
  }

  addContent() {
    const dailogRef = this.dialog.open(FormComponent, { width: '400px', data: { _id: this.headerContent._id }, disableClose: true });

    dailogRef.afterClosed().subscribe(() => {
      this.getTableData();
    });
    this.contentServ.toggle = true;
  }

  edit_delSelectedContent(event) {
    if (event.action === 'Edit') {
      this.contentServ.toggle = false;
      this.contentServ.choosenContent = event;
      const dialogref = this.dialog.open(FormComponent, { width: '400px', data: event });
      dialogref.afterClosed().subscribe(
        ()=> this.getTableData()
      );
    } else if (event.action === 'Delete') {
      this.deleteContent(event);
    }
  }

  deleteContent(event) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { title: 'Confirm', confirmMessage: 'Do you want to delete ?' },
      disableClose: true
    });
    confirmDialog.afterClosed().subscribe(
      (contentData) => {
        if (contentData === 'Yes') {
          this.callDeleteApi(event);
          this.getTableData();
        }

      }
    );
  }

  callDeleteApi(event) {
    this.contentServ.deleteContent(event).subscribe(
      () => {

      }
    );
  }

  buttonClicked(event) {
    this.dialog.open(ShowFileComponent, { data: event })
  }

  getTableData(): void {
    this.contentServ.getContentTable(this.headerContent._id).subscribe(
      (data) => {
        this.contentData = data.list;
      },
      (err) => { }
    );
  }
}
