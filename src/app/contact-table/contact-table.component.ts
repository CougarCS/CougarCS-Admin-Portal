import { Component, Input, OnInit } from '@angular/core';

import { ContactManager } from '../utils/contact.manager';
import { Contact } from '../utils/contact.data';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent {

  @Input()
  length: number = 0;

  @Input()
  memberCount: number = 0;

  @Input()
  contacts: Contact[] = [];

  constructor() { }
  
}
