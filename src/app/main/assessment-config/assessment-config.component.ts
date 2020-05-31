import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AssignmentConfigrationService } from '../../services/Assignment_configration/assignment-configration.service';

@Component({
  selector: 'app-test-config',
  templateUrl: './assessment-config.component.html',
  styleUrls: ['./assessment-config.component.scss']
})
export class TestConfigComponent implements OnInit {

  public formdata = {};
  id: string

  headerLabel = 'Assessment-Configuration'

  test_configform = new FormGroup({
    numberofquestion: new FormControl(''),
    numberofattemts: new FormControl(''),
    totalmarks: new FormControl(''),
    passmarks: new FormControl('')
  })
  constructor(private service: AssignmentConfigrationService) { }

  ngOnInit(): void {
    this.patchValues();
  }

  patchValues() {
    this.service.getFormData().subscribe(
      (initValue) => {
        this.test_configform.patchValue({
          numberofquestion: initValue.list[0].numberOfQuestions,
          numberofattemts: initValue.list[0].numberOfAttempts,
          totalmarks: initValue.list[0].totalMarks,
          passmarks: initValue.list[0].passMarks

        })
        this.id = initValue.list[0]._id
      }
    )

  }

  updateAssignmentConfigration() {
    this.service.dispalyFormData(this.test_configform.value, this.id).subscribe(
      ()=> this.patchValues()
    );


    // this.formdata = this.test_configform.value;
    // this.service.dispalyFormData(this.formdata);

  }
}