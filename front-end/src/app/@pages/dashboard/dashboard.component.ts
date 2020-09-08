import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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

  constructor(private router: Router, public auth: AuthService) {}

  ngOnInit(): void {}

  public logout(): void {
    this.auth.logout().subscribe(
      () => {
        this.auth.destroyToken();
        this.router.navigate(['/account/login']);
      },
      (log) => console.warn(log)
    );
  }
}
