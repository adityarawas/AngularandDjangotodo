import { Component, OnInit, OnChanges, SimpleChanges, IterableDiffers } from '@angular/core';
import { Todo } from '../models/todo';
import { DataService } from '../data.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
   
  todos:Todo[];
  constructor(private dataService: DataService,private iterableDiffers: IterableDiffers) { }

  deleteRecord(pk){
    this.todos.map((i,idx)=>{
       if(i.pk === pk){
        this.todos[idx].status = "2"
        console.log( this.todos[idx])
       }
    })
  }
  addnewrecord(data){
    this.todos.push(data)
  }
  addRecordtopending(pk){
    this.todos.map((i,idx)=>{
      if(i.pk === pk){
       this.todos[idx].status = "0"
      }
   })
  }
  ngOnInit(): void {

    this.dataService.sendGetRequest('api/todo/').subscribe((data:any[])=>{
      this.todos = data;
    })
  }


  
}
