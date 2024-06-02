import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../shared/todolist.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [],
})
export class TodoComponent {
  todos: any[] = [];
  constructor(private todolistservice: TodolistService) {}

  ngOnInit(): void {
    this.todolistservice.firestorecollection
      .valueChanges({ idField: 'id' })
      .subscribe((item) => {
        this.todos = item.sort((a:any , b:any)=>{
          return a.isDone -b.isDone
        }) 
      });
  }
  Addtask(todotask: HTMLInputElement) {
    if (todotask.value) {
      this.todolistservice.addTodo(todotask.value);
      todotask.value = '';
    }
  }
  Updatetaskstatus(id: string, newstatus: boolean) {
    this.todolistservice.updateTodoStatus(id, newstatus);
  }
  Deletetask(id: string) {
    this.todolistservice.deleteTodo(id);
  }
  
}
