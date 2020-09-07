import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateGroupComponent } from './dialog-create-group/dialog-create-group.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  public list = [
    {
      id: 1,
      name: 'Fase 1 - Analísis',
      order: 1,
      edit: false,
      list_task: [
        {
          name: 'Tarea',
          description: 'Descripcion de la tarea',
          finished: false,
        },
        {
          name: 'Otra tarea diferente',
          description: 'Reparar los componentes',
          finished: true,
        },
      ],
    },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  public save(group): void {
    group.edit = false;
    console.log('Guardando grupo');
    console.log(group);
  }

  public delete(index: number): void {
    this.list.splice(index, 1);
    console.log(this.list);
  }

  public openDialogCreateGroup(): void {
    const dialogRef = this.dialog.open(DialogCreateGroupComponent, {
      width: '30rem',
      data: { name: '' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.list.push({
          id: this.list.length + 1,
          name: result.name,
          order: this.list.length + 1,
          edit: false,
          list_task: [],
        });
        console.log(result);
      }
    });
  }

  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }
}
