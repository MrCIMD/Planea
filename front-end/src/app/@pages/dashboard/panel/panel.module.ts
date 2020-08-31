import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { SharedModule } from '../../../modules/shared/shared.module';
import { DialogCreatePanelComponent } from './dialog-create-panel/dialog-create-panel.component';

@NgModule({
  declarations: [PanelComponent, DialogCreatePanelComponent],
  imports: [CommonModule, PanelRoutingModule, SharedModule],
})
export class PanelModule {}
