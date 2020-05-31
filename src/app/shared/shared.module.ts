import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMatTableComponent } from './custom-mat-table/custom-mat-table.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatHeaderComponent } from './mat-header/mat-header.component';
import { UserAlreadyLogginComponent } from './user-already-loggin/user-already-loggin.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AddDailogComponent } from './add-dailog/add-dailog.component';
import { ShowFileComponent } from './show-file/show-file.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomMatTableComponent, 
    MatHeaderComponent, UserAlreadyLogginComponent, ConfirmDialogComponent, AddDailogComponent, ShowFileComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    CustomMatTableComponent,
    MatHeaderComponent
  ]
})
export class SharedModule { }
