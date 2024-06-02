import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from 'src/environment/environment';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
