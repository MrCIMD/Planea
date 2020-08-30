import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public listMenu = [
    { action: 'Inicio', rute: '/dashboard', icon: 'home' },
    { action: 'Panel', rute: '/dashboard/panel', icon: 'work' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
