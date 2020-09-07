import { Component, OnInit, Input } from '@angular/core';
import { DialogTaskComponent } from '../dialog-task/dialog-task.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card-item-task',
  templateUrl: './card-item-task.component.html',
  styleUrls: ['./card-item-task.component.css'],
})
export class CardItemTaskComponent implements OnInit {
  @Input() task: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.task);
  }

  public openDialogTask(event): void {
    const txtclass = event?.originalTarget?.attributes[0]?.textContent;
    if (!txtclass.includes('mat-checkbox')) {
      const dialogRef = this.dialog.open(DialogTaskComponent, {
        width: '35rem',
        data: this.task,
      });
      dialogRef.afterClosed().subscribe((result) => {
        // Event Output Emitter
        console.log(result);
      });
    }
  }
}
