import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
// import {} from '@angular/material/';
// import {} from '@angular/material/';
// import {} from '@angular/material/';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }
