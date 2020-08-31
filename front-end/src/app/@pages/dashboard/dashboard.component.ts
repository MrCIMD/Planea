import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public listMenu = [
    { action: 'Inicio', rute: '/dashboard', icon: 'home' },
    { action: 'Proyectos', rute: '/dashboard/projects', icon: 'work' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
