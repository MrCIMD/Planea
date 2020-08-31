import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreatePanelComponent } from './dialog-create-panel/dialog-create-panel.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  public step = 0;
  public list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogCreatePanelComponent, {
      width: '30rem',
      data: { name: '', description: '' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
