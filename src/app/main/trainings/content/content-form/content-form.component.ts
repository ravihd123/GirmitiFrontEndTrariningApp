import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContentService } from 'src/app/services/main/trainings/contents/content.service';
import { ResourceService } from 'src/app/services/resource/resource.service';
import { Utils } from 'src/app/shared/utilities/utils';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss']
})
export class FormComponent implements OnInit {

  content_url: string = '';
  contentForm: FormGroup;
  contentData: any;
  headerToggle: boolean;
  Filedata: File;
  isEdit: boolean = false;
  contentFormUIconfg: { heading: string; editheading: string; contentname: string; contentdescription: string; contentfile: string; contenttype: string; contentduration: string; contentstatus: string; save: string; cancel: string; update: string; };
  contentStatus: any = [
    { 'value': 'Active' },
    { 'value': 'Inactive' }
  ];
  constructor(private fb: FormBuilder,
    private contServ: ContentService,
    private resourceServ: ResourceService,
    private toastSerice: ToastService,
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
    this.initContResource();
    this.contentFormInit();
    if (!Utils.IS_UNDEFINED_OR_NULL(this.data)) {
      this.patchValues(this.data)
    }
    this.contentData = this.contServ.getContentData();
  }

  /* Content form initialization */
  initContResource() {
    this.contentFormUIconfg = {
      heading: this.resourceServ.getConstValue('content.heading'),
      editheading: this.resourceServ.getConstValue('content.editheading'),
      contentname: this.resourceServ.getConstValue('content.contentname.label'),
      contentdescription: this.resourceServ.getConstValue('content.contentdescription.label'),
      contentfile: this.resourceServ.getConstValue('content.contentfile.label'),
      contenttype: this.resourceServ.getConstValue('content.contenttype.label'),
      contentduration: this.resourceServ.getConstValue('content.contentduration.label'),
      contentstatus: this.resourceServ.getConstValue('content.contentstatus.label'),
      save: this.resourceServ.getConstValue('content.button.save'),
      cancel: this.resourceServ.getConstValue('content.button.cancel'),
      update: this.resourceServ.getConstValue('content.button.update')
    };
  }

  /* Content form initialization */
  contentFormInit() {
    this.contentForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required],
      status: ['Active', Validators.required]
    });
  }

  /* Edit content form value populate on edit option */
  patchValues(data) {
    if (data.action == 'Edit') {
      this.isEdit = true;
      this.contentForm.patchValue({
        name: data.contentName,
        description: data.contentDescription,
        status: data.status ? 'Active' : 'Inactive'
      });
    }

  }

  /* Add content form submission */
  contentSubmit() {
    if(this.isEdit) {
      this.contServ.editContentById(this.contentForm.value, this.Filedata, this.data).subscribe(
        (data)=> this.contentData = data
      );
      console.log(this.data)
      this.toastSerice.showToastMsg(this.resourceServ.getConstValue('content.updateToastMsg'));
    } else {
      this.contServ.createNewContent(this.contentForm.value, this.Filedata, this.data._id).subscribe(
        (data) => this.contentData = data);
        this.toastSerice.showToastMsg(this.resourceServ.getConstValue('content.addtoastMsg'));
    }
    this.contServ.formData.next(this.contentData);
    this.contentForm.reset();
    this.closeContentForm();
  }

  /* Content uploading */
  uploadFile(event) {
    this.Filedata = event.target.files[0]
  }

  /* Close content form submission */
  closeContentForm() {
    this.dialogRef.close();
  }

}
