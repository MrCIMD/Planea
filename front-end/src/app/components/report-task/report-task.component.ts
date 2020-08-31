import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-report-task',
  templateUrl: './report-task.component.html',
  styleUrls: ['./report-task.component.css'],
})
export class ReportTaskComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public doughnutChartType: ChartType = 'doughnut';
  // Doughnut
  public doughnutChartLabels: Label[] = [
    'Terminadas.',
    'En proceso.',
    'Retrasadas.',
  ];
  public doughnutChartData: MultiDataSet = [[7, 5, 3]];

  // events

  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
