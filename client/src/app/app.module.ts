import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodocontrolsComponent } from './todos/todocontrols/todocontrols.component';
import { TodocardComponent } from './todos/todocard/todocard.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodocontrolsComponent,
    TodocardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
