import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { IpAddressComponent } from './components/ip-address/ip-address.component';
import { ExcelViewerComponent } from './components/excel-viewer/excel-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    IpAddressComponent,
    ExcelViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [IpAddressComponent, ExcelViewerComponent]
})
export class AppModule { }
