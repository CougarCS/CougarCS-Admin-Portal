import { Component, OnInit } from '@angular/core';
import { Contact } from '../../utils/contact.data';
import { ContactManager } from '../../utils/contact.manager';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['../app.component.css', './contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  length: number = 0;
  memberCount: number = 0;
  contacts: Contact[] = [];

  selected: Contact[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    await ContactManager.getContacts()
      .then(contactsData => {
        this.length = contactsData.length;
        this.memberCount = contactsData.memberCount;
        this.contacts = contactsData.contacts;
      });
  }

  public onRefresh(): void {
    this.getData();
  }

  public onRowSelectChange(event: any): void {
    console.log(event);
  }

  public onRowUnselectChange(event: any): void {
    console.log(event);
  }

}
