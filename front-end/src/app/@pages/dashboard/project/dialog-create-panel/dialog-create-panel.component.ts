import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-create-panel',
  templateUrl: './dialog-create-panel.component.html',
  styleUrls: ['./dialog-create-panel.component.css'],
})
export class DialogCreatePanelComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogCreatePanelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
