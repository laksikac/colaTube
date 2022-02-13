
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

import {TopMenuComponent} from './top-menu/top-menu.component';

import {MenubarModule} from 'primeng/menubar';

import {InputTextModule} from 'primeng/inputtext';

import {CarouselModule} from 'primeng/carousel';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [
    AppComponent,
    BottomMenuComponent,
    TopMenuComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    DataViewModule,
    HttpClientModule,
    DockModule,
    MenubarModule,
    InputTextModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
