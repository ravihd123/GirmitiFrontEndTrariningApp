import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { addTraining } from './addtraining-ui-config';
import { ResourceService } from 'src/app/services/resource/resource.service';
import { utils, element } from 'protractor';
import { Utils } from 'src/app/shared/utilities/utils';
import { AddtrainingsService } from 'src/app/services/main/trainings/addtraings/addtrainings.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { AddDailogComponent } from 'src/app/shared/add-dailog/add-dailog.component';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-addtraining',
  templateUrl: './addtraining.component.html',
  styleUrls: ['./addtraining.component.scss']
})
export class AddtrainingComponent implements OnInit {

  savebtnlabel: string;
  cancelbtnlabel: string;
  headerlabel: string;
  buttonDisabled: boolean;
  categoryError = false;
  isEdit = false;
  option = ["active", "inactive"]
  trainingForm: FormGroup;
  route: any;
  addTrainingUiConfig: addTraining
  form: any;

  categories: any[];
  subcategory: any[];
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddtrainingComponent>,
    private resourseService: ResourceService,
    @Inject(MAT_DIALOG_DATA) public data,
    private addtrainingsService: AddtrainingsService,
    public dialog: MatDialog,
    private toastSrv: ToastService
  ) { }

  ngOnInit(): void {
    this.savebtnlabel = this.resourseService.getConstValue("training.addTraining.savebutton");
    this.cancelbtnlabel = this.resourseService.getConstValue("training.addTraining.cancelbutton");
    this.headerlabel = this.resourseService.getConstValue("training.addtrainingheader");

    this.initResource();
    this.initCategory().subscribe(
      (data) => {
        this.categories = data.list;

      });
    this.formInitialize();
    if (!Utils.IS_UNDEFINED_OR_NULL(this.data)) {
      this.editTrainingForm();
    }
  }
  private initResource() {
    this.addTrainingUiConfig = {
      trainingName: this.resourseService.getConstValue("training.addtraining.namelabel"),
      category: this.resourseService.getConstValue("training.addTraining.categorylabel"),
      subCategory: this.resourseService.getConstValue("training.addTraining.subcategorylabel"),
      status: this.resourseService.getConstValue("training.addTraining.statuslabel"),
    }

  }
  private formInitialize() {
    this.trainingForm = this.formBuilder.group({
      trainingname: ['', Validators.required],
      category: ['', Validators.required],
      subcategory: ['', Validators.required],
      status: ['active', Validators.required],

    })
  }
  private initCategory() {
    return this.addtrainingsService.getCategories();
  }

  private editTrainingForm() {
    let subCategoryPatchValue = [];
    let categoryPatchValue = [];
    this.initCategory().subscribe(
      (data) => {
        this.categories = data.list;
        categoryPatchValue = this.categories.filter((element) => {
          return element.categoryName == this.data.category
        });
        this.initializesubCategory(categoryPatchValue[0]).subscribe((data) => {
          this.subcategory = data.subCategories;
          subCategoryPatchValue = data.subCategories.filter((element) => {
            return element.subCategoryName == this.data.subCategory;
          })
          console.log(subCategoryPatchValue)
          if (this.data.action === 'Edit') {
            this.isEdit = true;
            this.headerlabel = this.resourseService.getConstValue("training.edittrainingheader");
            this.savebtnlabel = this.resourseService.getConstValue("training.addTraining.updatebutton")
            this.trainingForm.patchValue({
              trainingname: this.data.trainingName,
              category: categoryPatchValue[0],
              subcategory: subCategoryPatchValue[0],
              status: this.data.status,
            })
          }
        })
      });
  }


  public hasError = (controlName: string, errorName: string) => {
    return this.trainingForm.controls[controlName].hasError(errorName);
  }

  selectedCategory(event) {
    this.buttonDisabled = true
    this.initializesubCategory(this.trainingForm.value.category).subscribe(
      (data) => {
        this.subcategory = data.subCategories;
      }
    )

  }
  private initializesubCategory(data) {
    return this.addtrainingsService.getSubcategories(data._id);
  }
  Clear() {
    this.dialogRef.close();

  }


  onSave() {
    this.addtrainingsService.createTraining(this.trainingForm.value, this.isEdit, this.data).subscribe(
      () => {
        this.toastSrv.showToastMsg("Training added successfully")
        this.dialogRef.close();
      },
      (err) => {
        if(err.status == 400){
          this.toastSrv.showToastMsg("Training name already exists");
        }
        
      }

    )
  }

  addCategory() {
    const dailogRef = this.openAddDailog({ title: 'Add Category', id: null });
    dailogRef.afterClosed().subscribe(
      (res) => {
        this.initCategory().subscribe(
          (data) => {
            this.categories = data.list;
          });
      }
    );

  }

  addSubCategory() {
    const dailogRef = this.openAddDailog({ title: 'Add Sub-Category', id: this.trainingForm.value.category._id });
    dailogRef.afterClosed().subscribe(
      (res) => {
        if (!Utils.IS_UNDEFINED_OR_NULL(res)) {

          this.addtrainingsService.getSubcategories(this.trainingForm.value.category._id).subscribe(
            (data) => {
              this.subcategory = data.subCategories;
            }

          );
        }
      }
    );

  }

  private openAddDailog(msg) {
    return this.dialog.open(AddDailogComponent, {
      width: '400px',
      data: msg,
      disableClose: true
    });
  }

}
