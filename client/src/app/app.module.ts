import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion'; 

import {ButtonModule} from 'primeng/button';

import {DataViewModule} from 'primeng/dataview';

import { HttpClientModule } from '@angular/common/http';

import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';


import {DockModule} from 'primeng/dock';




@NgModule({
  declarations: [
    AppComponent,
    BottomMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    DataViewModule,
    HttpClientModule,
    DockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
