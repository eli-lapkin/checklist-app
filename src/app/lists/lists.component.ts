import { Component } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
  public childItems = [1];

  public duplicate() {
    this.childItems.push(this.childItems.length);
  }
}
