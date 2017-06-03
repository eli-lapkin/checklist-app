import { Component } from '@angular/core';
import { Todo } from 'app/todo';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: FirebaseListObservable<Todo[]>;
  initialId: number = 0;

  todo: Todo = {
    id: 0,
    title: '',
    complete: false
  }

  constructor(db: AngularFireDatabase) {
    this.todos = db.list('/todos');
  }

  addTodo() {
    this.todo.id++;
    this.todos.push(this.todo);
    this.todo.title = '';
  }

  deleteAll() {
    this.todos.remove();
  }
}
