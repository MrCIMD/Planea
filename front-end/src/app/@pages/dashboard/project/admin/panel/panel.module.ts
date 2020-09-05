import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { SharedModule } from '../../../../../modules/shared/shared.module';
import { DialogCreateGroupComponent } from './dialog-create-group/dialog-create-group.component';

@NgModule({
  declarations: [PanelComponent, DialogCreateGroupComponent],
  imports: [CommonModule, PanelRoutingModule, SharedModule],
})
export class PanelModule {}
