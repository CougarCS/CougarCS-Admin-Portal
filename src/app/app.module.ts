import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactTableComponent } from './contact-table/contact-table.component';

import { ContactService } from './utils/contact.service';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactTableComponent,
    ContactManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
