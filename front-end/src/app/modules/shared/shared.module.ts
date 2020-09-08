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
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormValidatorsComponent } from '../../components/form-validators/form-validators.component';
import { ReportTaskComponent } from '../../components/report-task/report-task.component';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { AvatarPipe } from '../../pipes/avatar.pipe';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
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
    MatTabsModule,
    MatCheckboxModule,
    MatRippleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    // Angular Modules
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
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
    MatTabsModule,
    MatCheckboxModule,
    MatRippleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
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
