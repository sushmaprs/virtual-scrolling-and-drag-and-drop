import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = ['First', 'Second', 'Third', 'Fourth'];
 
  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
  title = 'Angular 7 – Virtual Scrolling and Drag and Drop features'; 
  scrollItems: number[] = [];
  constructor() {
    for (let index = 0; index < 100; index++) {
      this.scrollItems.push(index);
    }
  }
}
