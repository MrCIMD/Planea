import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';
import { SharedModule } from '../../../../../modules/shared/shared.module';

@NgModule({
  declarations: [MembersComponent],
  imports: [CommonModule, MembersRoutingModule, SharedModule],
})
export class MembersModule {}
