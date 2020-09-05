import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-group',
  templateUrl: './dialog-create-group.component.html',
  styleUrls: ['./dialog-create-group.component.css'],
})
export class DialogCreateGroupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogCreateGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
