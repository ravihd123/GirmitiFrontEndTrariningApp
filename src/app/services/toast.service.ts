import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastMsg: MatSnackBar) { }

  showToastMsg(message: string): void {

    this.toastMsg.open(message, 'close', {
      duration: 5000

    })
  }
}
