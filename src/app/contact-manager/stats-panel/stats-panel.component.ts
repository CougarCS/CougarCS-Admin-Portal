import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/utils/contact.data';

@Component({
  selector: 'app-stats-panel',
  templateUrl: './stats-panel.component.html',
  styleUrls: ['../../app.component.css', './stats-panel.component.css']
})
export class StatsPanelComponent implements OnInit {

  @Input()
  contacts: Contact[] = [];

  @Input()
  memberCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
