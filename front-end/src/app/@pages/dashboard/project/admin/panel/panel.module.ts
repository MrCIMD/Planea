import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../modules/shared/shared.module';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { DialogCreateGroupComponent } from './dialog-create-group/dialog-create-group.component';
import { CardItemTaskComponent } from './task/card-item-task/card-item-task.component';
import { DialogCreateTaskComponent } from './task/dialog-create-task/dialog-create-task.component';
import { DialogTaskComponent } from './task/dialog-task/dialog-task.component';

@NgModule({
  declarations: [
    PanelComponent,
    DialogCreateGroupComponent,
    CardItemTaskComponent,
    DialogCreateTaskComponent,
    DialogTaskComponent,
  ],
  imports: [CommonModule, PanelRoutingModule, SharedModule],
})
export class PanelModule {}
