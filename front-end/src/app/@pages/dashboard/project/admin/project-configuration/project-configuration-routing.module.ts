import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectConfigurationComponent } from './project-configuration.component';

const routes: Routes = [{ path: '', component: ProjectConfigurationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectConfigurationRoutingModule {}
