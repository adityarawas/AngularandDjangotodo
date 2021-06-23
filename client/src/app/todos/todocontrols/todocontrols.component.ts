import { Component, OnInit, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-todocontrols',
  templateUrl: './todocontrols.component.html',
  styleUrls: ['./todocontrols.component.css']
})
export class TodocontrolsComponent implements OnInit {

  constructor(private dataService: DataService) { }
  
  @Output() addnewrecord = new EventEmitter<string>();

  todoerr:string
  description:string
  submitTodo({title,description}){
    this.todoerr =""
    this.description =""
    if(title.length === 0) this.todoerr = "Please Enter task"
    if(description.length === 0) this.description = "Please enter description"
    if(this.todoerr.length !== 0 ||  this.description.length !== 0) return
    this.dataService.sendPostRequest(`api/todo/`,{title,description}).subscribe((data:any)=>{
      if(data){
        alert(1)
        this.addnewrecord.emit(data);
      }
    })

  }
  ngOnInit(): void {
  }

}
