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

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { FormValidatorsComponent } from '../../components/form-validators/form-validators.component';
import { ReportTaskComponent } from '../../components/report-task/report-task.component';

@NgModule({
  declarations: [FormValidatorsComponent, ReportTaskComponent],
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
    ChartsModule,
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
    // Modulos generales
    ChartsModule,
    // Components
    FormValidatorsComponent,
    ReportTaskComponent,
  ],
})
export class SharedModule {}
