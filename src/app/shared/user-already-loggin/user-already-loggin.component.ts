import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-already-loggin',
  templateUrl: './user-already-loggin.component.html',
  styleUrls: ['./user-already-loggin.component.scss']
})
export class UserAlreadyLogginComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserAlreadyLogginComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

}
