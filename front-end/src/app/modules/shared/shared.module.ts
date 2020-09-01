import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormValidatorsComponent } from '../../components/form-validators/form-validators.component';
import { ReportTaskComponent } from '../../components/report-task/report-task.component';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { AvatarPipe } from '../../pipes/avatar.pipe';

@NgModule({
  declarations: [
    FormValidatorsComponent,
    ReportTaskComponent,
    AvatarComponent,
    AvatarPipe,
  ],
  imports: [
    // Angular Modules
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // Material Modules
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatBadgeModule,
    MatListModule,
    MatDialogModule,
    MatExpansionModule,
    DragDropModule,
  ],
  exports: [
    // Angular Modules
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // Material Modules
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatBadgeModule,
    MatListModule,
    MatDialogModule,
    MatExpansionModule,
    DragDropModule,
    // Modulos generales

    // Components
    FormValidatorsComponent,
    ReportTaskComponent,
    AvatarComponent,
    // Pipes
    AvatarPipe,
  ],
})
export class SharedModule {}
