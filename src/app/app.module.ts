import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactService } from '../utils/contact.service';

import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { ContactTableComponent } from './contact-manager/contact-table/contact-table.component';
import { StatsPanelComponent } from './contact-manager/stats-panel/stats-panel.component';
import { ControlPanelComponent } from './contact-manager/control-panel/control-panel.component';
import { AddContactDialogComponent } from './contact-manager/dialogs/add-contact-dialog/add-contact-dialog.component';
import { ModifyContactDialogComponent } from './contact-manager/dialogs/modify-contact-dialog/modify-contact-dialog.component';
import { DeleteContactDialogComponent } from './contact-manager/dialogs/delete-contact-dialog/delete-contact-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactTableComponent,
    ContactManagerComponent,
    StatsPanelComponent,
    ControlPanelComponent,
    AddContactDialogComponent,
    ModifyContactDialogComponent,
    DeleteContactDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    ButtonModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
