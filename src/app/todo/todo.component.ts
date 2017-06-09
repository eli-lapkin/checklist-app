import { Component } from '@angular/core';
import 'rxjs/add/operator/do';

export class Todo {
  title: string = '';
  complete: string = 'false';
}

export class List {
  title: string = '';
  hidden: boolean = true;
}

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'angularfire2';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  
  todo: Todo = {
    title: '',
    complete: 'false'
  }

  list: List = {
    title: '',
    hidden: true
  }

  todos: FirebaseListObservable<any>;
  constructor(private db: AngularFireDatabase) {
    
  }

  createList() {

    // show list
      this.list.hidden = false;

    // create db list
    if (this.list.title.length === 0) {
      this.todos = this.db.list('/lists/untitled');
    } else if (this.list.title.length > 0) {
      this.todos = this.db.list('/lists/' + this.list.title);
    }

  }

  addTodo() {
    if (this.todo.title.length > 0) {
      this.todos.push(this.todo);
      this.todo.title = '';
    }
  }

  deleteTodo(key: string) {
   this.todos.remove(key);
  }

  deleteAll() {
    this.todos.remove();
  }

  toggleComplete(key: string, newComplete: string) {
    this.todos.update(key, newComplete);
  }
}
