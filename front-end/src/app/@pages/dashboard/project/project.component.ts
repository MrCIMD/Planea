import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreatePanelComponent } from './dialog-create-panel/dialog-create-panel.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  public step = 0;
  public list = [
    { id: 1, name: 'Appagar' },
    { id: 2, name: 'Planea' },
    { id: 3, name: 'Test RIASEC' },
    { id: 4, name: 'Beky' },
  ];

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

  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }
}
