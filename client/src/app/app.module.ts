
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';

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

import {DialogModule} from 'primeng/dialog';


import { AddClipComponent } from './add-clip/add-clip.component';

import {InputTextareaModule} from 'primeng/inputtextarea';

import {RatingModule} from 'primeng/rating';
import { ClipsComponent } from './clips/clips.component';



@NgModule({
  declarations: [
    AppComponent,
    BottomMenuComponent,
    TopMenuComponent,
    SliderComponent,
    AddClipComponent,
    ClipsComponent
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
    DialogModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextareaModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
