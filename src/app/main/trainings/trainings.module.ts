import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingsComponent } from './trainings.component';
import { DisplayTestsComponent } from './test/display-tests.component';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestformComponent } from './test/testform/testform.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuestionListComponent } from './test/question-list/question-list.component';
import { AddQuestionComponent } from './test/question-list/add-question/add-question.component';
import { FormComponent } from './content/content-form/content-form.component';
import { ContentComponent } from './content/content.component';
import { AddtrainingComponent } from './addtraining/addtraining.component';
import { MatTableModule } from '@angular/material/table';
import { AddtrainingsService } from 'src/app/services/main/trainings/addtraings/addtrainings.service';


@NgModule({
  declarations: [TrainingsComponent,AddtrainingComponent, ContentComponent, FormComponent, TrainingsComponent, DisplayTestsComponent,
    TestformComponent, QuestionListComponent, AddQuestionComponent],
  imports: [
    CommonModule, ReactiveFormsModule,
    TrainingsRoutingModule, FlexLayoutModule,
    MatTableModule,
    MaterialModule,
    SharedModule,
    MatDialogModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[AddtrainingComponent, FormComponent],
  exports: [MaterialModule],
  providers: [AddtrainingsService]

})
export class TrainingsModule { }
