import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { HostService } from 'src/app/services/host.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-show-file',
  templateUrl: './show-file.component.html',
  styleUrls: ['./show-file.component.scss']
})
export class ShowFileComponent implements OnInit {
  dataFile: any;
  videoFile: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private dailogRef: MatDialogRef<ShowFileComponent>,
    private hostSrv: HostService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getSourceFile();
  }

  getSourceFile() {

    if (this.data.attachment.mimetype === "video/mp4") {
      this.videoFile = true;
    } else {
      this.videoFile = false;
    }
     this.dataFile = this.hostSrv.getHostURL() + '/contentfs/file/' + this.data._id

  }

  closeDialog() {
    this.dailogRef.close();
  }

  cleanURL(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.dataFile);
  }


}
