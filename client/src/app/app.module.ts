import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion'; 

import {ButtonModule} from 'primeng/button';

import {DataViewModule} from 'primeng/dataview';


import {DataViewModule} from 'primeng/dataview';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
<<<<<<< HEAD
    DataViewModule
=======
    ButtonModule,
    DataViewModule,
>>>>>>> 8b339584514160063156904d7e28f19bfa4f6fa1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
