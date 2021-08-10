import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/utils/contact.data';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['../../app.component.css', './control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  @Input()
  selected: Contact[] = [];

  @Output()
  onRefreshComplete: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleAddClick(event: any): void {
    console.log('Add button clicked!');
  }

  handleModifyClick(event: any): void {
    console.log('Modify button clicked!');
  }

  handleDeleteClick(event: any): void {
    console.log('Delete button clicked!');
  }

  handleRefreshClick(event: any): void {
    console.log('Refresh button clicked!');
    this.onRefreshComplete.emit("refresh");
  }

}
