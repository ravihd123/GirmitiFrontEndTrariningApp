import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Utils } from '../utilities/utils';
import { AddtrainingsService } from 'src/app/services/main/trainings/addtraings/addtrainings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dailog',
  templateUrl: './add-dailog.component.html',
  styleUrls: ['./add-dailog.component.scss']
})
export class AddDailogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private addtrainingsService: AddtrainingsService,
    private formBuilder: FormBuilder,
  ) { }

  addLabel: string;
  contentAdded: string;
  erroMessage: string;
  addContentForm: FormGroup;

  ngOnInit(): void {
    this.addLabel = this.data.title;
    this.addContentForm = this.formBuilder.group({
      add: ['', Validators.required]
    });
  }

  closeDailogRef() {
    this.contentAdded = '';
    this.dialogRef.close();
  }

  addContent() {
    if (Utils.IS_UNDEFINED_OR_NULL(this.data.id)) {
      this.addtrainingsService.addCategories(this.addContentForm.controls.add.value).subscribe(
        (res) => {
          this.dialogRef.close(res);
        },
        (err) => {
          this.addContentForm.controls.add.setErrors({ add: true });
          this.erroMessage = err.error.message;
        });
    }
    if (!Utils.IS_UNDEFINED_OR_NULL(this.data.id)) {

      this.addtrainingsService.addSubCategories(this.addContentForm.controls.add.value, this.data.id).subscribe(
        (res) => {
          this.dialogRef.close(res);
        },
        (err) => {
          this.addContentForm.controls.add.setErrors({ add: true });
          this.erroMessage = err.error.message;
        });

    }
  }
}
