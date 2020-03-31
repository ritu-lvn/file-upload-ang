import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  ngOnInit(): void {}
  message: string = ""
  cancelButtonText = "Cancel"
  deleteButtonText= "Delete";


    constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<PopupComponent>) {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize('300vw','300vw')
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
  changePosition() {
    this.dialogRef.updatePosition({ top: '12%', left: '72%' });
}

}