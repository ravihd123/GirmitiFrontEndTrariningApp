import { Component, OnInit, Inject, Input, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../../../../services/main/trainings/test/test.service'
import { TestresourceService } from '../../../../services/resource/testresourceservice/testresource.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ResourceService } from '../../../../services/resource/resource.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Utils } from '../../../../shared/utilities/utils';
import { AddtestService } from '../../../../services/main/trainings/test/addtest/addtest.service';
import { ToastService } from 'src/app/services/toast.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.scss']
})
export class TestformComponent implements OnInit {
  testForm: FormGroup;
  testFormData: any;

  difficultylevelOptions = [
    { 'value': 'Easy' },
    { 'value': 'Medium' },
    { 'value': 'Hard' }
  ];
  status = [
    { 'value': 'Active',  },
    { 'value': 'InActive' },
  ];
  isEdit: boolean = false;
  TestformUiConfig: { heading: string; testname: string; difficultylevel: string; totalmarks: string; numberofque: string; attempts: string; pass: string; status: string; save: string; clear: string; update: string; };
  ValidformUiConfig: { testnamevalid: string; difficultylevelvalid: string; totalmarksvalid: string; numberofquevalid: string; attemptsvalid: string; passvalid: string; statusvalid: string; edittestheading: string; toastadd: string; toastedit: string; toastdelete: string; };
  testConfigValues: any;
  errorMessage: string;

  testlistarray: any;
  testnamebackend: any;
  testNameExists:boolean=false;

  constructor(
    // private res
    private testservice: TestService,
    private addtestsrv :AddtestService,
    private resourcesrv: ResourceService,
    private toastservice : ToastService,
    private testResource: TestresourceService,
    public dialog: MatDialogRef<TestformComponent>,
    @Inject(MAT_DIALOG_DATA) public data

  ) { }

  ngOnInit(): void {
    this.getTestList();
    this.initResources();
    this.initvalidationResources();
    this.initailizatingForm();
    this.getTestConfigDefaultValues();
    if (!Utils.IS_UNDEFINED_OR_NULL(this.data)) {
      this.getEditableData();
    }
  };

  getTestList(){
    this.testservice.getMattableData().subscribe(res=>{
      this.testlistarray=res.list;
      console.log("testlist", this.testlistarray);
      });
   
  }

  // INITIALIZING FORM VALUE
  initailizatingForm() {
    this.testForm = new FormGroup({
      // trainingid: new FormControl(''),
      testname: new FormControl('', [Validators.required]),
      difficultylevel: new FormControl('', [Validators.required]),
      attempts: new FormControl('', [Validators.required]),
      totalmarks: new FormControl('', [Validators.required]),
      numberofque: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required]),
      status: new FormControl('Active', [Validators.required])

    });

  }

// EDITABLE DATA
  getEditableData() {
    if (this.data.action == "Edit") {
      this.isEdit = true;
      this.testForm.patchValue({
        testname: this.data.testName,
        difficultylevel: this.data.difficultyLevel,
        attempts: this.data.numberOfAttempts,
        totalmarks: this.data.totalMarks,
        numberofque: this.data.numberOfQuestions,
        pass: this.data.passMarks,
        status: this.data.status
      })
    }
  }

  // RESOURCE FILE
  private initResources() {
    this.TestformUiConfig = {
      heading: this.resourcesrv.getConstValue('test.heading'),
      testname: this.resourcesrv.getConstValue('test.testname.label'),
      difficultylevel: this.resourcesrv.getConstValue('test.difficultylevel.label'),
      totalmarks: this.resourcesrv.getConstValue('test.totalmarks.label'),
      numberofque: this.resourcesrv.getConstValue('test.numberofque.label'),
      attempts: this.resourcesrv.getConstValue('test.attempts.label'),
      pass: this.resourcesrv.getConstValue('test.pass.label'),
      status: this.resourcesrv.getConstValue('test.status.label'),
      save: this.resourcesrv.getConstValue('test.button.save'),
      clear: this.resourcesrv.getConstValue('test.button.clear'),
      update: this.resourcesrv.getConstValue('test.button.update')
    }
  }

  // FormValidation Resource

  private initvalidationResources(){
    this.ValidformUiConfig = {
      testnamevalid : this.resourcesrv.getConstValue('test.testname.valid'),
      difficultylevelvalid : this.resourcesrv.getConstValue('test.difficultylevel.valid'),
      totalmarksvalid : this.resourcesrv.getConstValue('test.totalmarks.valid'),
      numberofquevalid : this.resourcesrv.getConstValue('test.numberofque.valid'),
      attemptsvalid : this.resourcesrv.getConstValue('test.attempts.valid'),
      passvalid : this.resourcesrv.getConstValue('test.pass.valid'),
      statusvalid : this.resourcesrv.getConstValue('test.status.valid'),
      edittestheading:this.resourcesrv.getConstValue('test.Editheading'),
      toastadd: this.resourcesrv.getConstValue('test.toast.add'),
      toastedit: this.resourcesrv.getConstValue('test.toast.edit'),
      toastdelete: this.resourcesrv.getConstValue('test.toast.delete'),
    }
  }

  statusvalue(){
    if(this.testForm.value.status=="Active"){
      this.testForm.value.status=true;
    }else{
      this.testForm.value.status=false;
    }
  }

  // ON SAVING FORM VALUE
  onSubmit() {
    this.statusvalue();
   this.addtestsrv.createTest(this.testForm.value, this.isEdit, this.data).subscribe(
        (response) => {    
          if(this.isEdit){
                this.toastservice.showToastMsg(this.ValidformUiConfig.toastedit);
               }else{
                this.toastservice.showToastMsg(this.ValidformUiConfig.toastadd);
               }    
               this.dialog.close()
               
        },
        (error) => {
            this.testForm.controls.testname.setErrors({testname:true})
            this.testNameExists=true;
            this.errorMessage=error.error.message;
        }
      )
  
  };

  // Geeting test COnfig Default Values

  getTestConfigDefaultValues(){
    this.testservice.getTestConfigvalue().subscribe(res=>{
      this.testForm.controls.numberofque.setValue(res.list[0].numberOfQuestions)
      this.testForm.controls.attempts.setValue(res.list[0].numberOfAttempts)
      this.testForm.controls.totalmarks.setValue(res.list[0].totalMarks);
      this.testForm.controls.pass.setValue(res.list[0].passMarks);   
})
     
      
      
  }


  // CLOSE DIALOG
  closeDialog() {
    this.dialog.close()
  }

}
