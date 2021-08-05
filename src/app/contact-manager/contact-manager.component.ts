import { Component, OnInit } from '@angular/core';
import { Contact } from '../utils/contact.data';
import { ContactManager } from '../utils/contact.manager';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  length: number = 0;
  memberCount: number = 0;
  contacts: Contact[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadContacts();
  }

  async loadContacts() {
    await ContactManager.getContacts()
      .then(contactsData => {
        this.length = contactsData.length;
        this.memberCount = contactsData.memberCount;
        this.contacts = contactsData.contacts;
      });
  }

}
