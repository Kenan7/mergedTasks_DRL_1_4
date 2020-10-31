import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import { GoogleChartsModule } from 'angular-google-charts';

// import {} from '@angular/material/';
// import {} from '@angular/material/';
// import {} from '@angular/material/';

const declarations = [
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTableModule,
  MatSlideToggleModule,
  MatToolbarModule,
  GoogleChartsModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [declarations]
})
export class MaterialModule { }
