import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  firestorecollection: AngularFirestoreCollection;

  constructor(private fireStore: AngularFirestore) {
    this.firestorecollection = fireStore.collection('todos');
  }

  addTodo(title: string) {
    this.firestorecollection.add({
      title: title,
      isDone: false,
    });
  }

  updateTodoStatus(id: string, newstatus: boolean) {
    this.firestorecollection.doc(id).update({ isDone: newstatus });
  }

  deleteTodo(id:string){

    this.firestorecollection.doc(id).delete()

  }
}
