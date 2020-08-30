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

import { ReactiveFormsModule } from '@angular/forms';

import { FormValidatorsComponent } from '../../components/form-validators/form-validators.component';

@NgModule({
  declarations: [FormValidatorsComponent],
  imports: [
    // Angular Modules
    CommonModule,
    ReactiveFormsModule,
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
  ],
  exports: [
    // Angular Modules
    CommonModule,
    ReactiveFormsModule,
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
    // Components
    FormValidatorsComponent,
  ],
})
export class SharedModule {}
