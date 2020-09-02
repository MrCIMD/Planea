import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { SharedModule } from '../../../modules/shared/shared.module';
import { DialogCreatePanelComponent } from './dialog-create-panel/dialog-create-panel.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [AdminComponent, ProjectComponent, DialogCreatePanelComponent],
  imports: [CommonModule, ProjectRoutingModule, SharedModule],
})
export class ProjectModule {}
