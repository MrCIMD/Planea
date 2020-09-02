import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectConfigurationRoutingModule } from './project-configuration-routing.module';
import { ProjectConfigurationComponent } from './project-configuration.component';
import { SharedModule } from '../../../../../modules/shared/shared.module';

@NgModule({
  declarations: [ProjectConfigurationComponent],
  imports: [CommonModule, ProjectConfigurationRoutingModule, SharedModule],
})
export class ProjectConfigurationModule {}
