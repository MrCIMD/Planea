import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'panel',
    loadChildren: () =>
      import('./panel/panel.module').then((m) => m.PanelModule),
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./calendar/calendar.module').then((m) => m.CalendarModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./reports/reports.module').then((m) => m.ReportsModule),
  },
  {
    path: 'members',
    loadChildren: () =>
      import('./members/members.module').then((m) => m.MembersModule),
  },
  {
    path: 'project-configuration',
    loadChildren: () =>
      import('./project-configuration/project-configuration.module').then(
        (m) => m.ProjectConfigurationModule
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'panel' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
