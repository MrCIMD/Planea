import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './@pages/account/account.component';
import { DashboardComponent } from './@pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    loadChildren: () =>
      import('./@pages/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('./@pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'account' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
