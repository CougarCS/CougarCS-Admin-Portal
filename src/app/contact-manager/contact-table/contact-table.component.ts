import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Table } from 'primeng/table';

import { Contact } from '../../../utils/contact.data';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent {

  @Input()
  contacts: Contact[] = [];

  @Input()
  selected: Contact[] = [];

  @Output()
  onRowSelectComplete: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onRowUnselectComplete: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  selectedRowsData: EventEmitter<Contact[]> = new EventEmitter<Contact[]>();

  @ViewChild('table') table!: Table;

  constructor() { }

  public onRowSelectChange(event: any): void {
    this.selectedRowsData.emit(this.table.selection);
    this.onRowSelectComplete.emit(event);
  }

  public onRowUnselectChange(event: any): void {
    this.selectedRowsData.emit(this.table.selection);
    this.onRowUnselectComplete.emit(event);
  }
  
}
