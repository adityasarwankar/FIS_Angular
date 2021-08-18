import { Component } from '@angular/core';
import {Model,TodoItem} from './model';
@Component({
  selector: 'todo-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  // x = 'todo';
  // products= 700;
  model = new Model();
  getName(){
    return this.model.user;
  }
  getTodoItems(){
    return this.model.items;
  }
}
