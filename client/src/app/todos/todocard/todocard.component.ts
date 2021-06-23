import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-todocard',
  templateUrl: './todocard.component.html',
  styleUrls: ['./todocard.component.css']
})
export class TodocardComponent implements OnInit {

  constructor(private dataService: DataService) { }
  @Input() title: string;
  @Input() description: string;
  @Input() status: string;
  @Input() created_at:string
  @Input() pk:number
  @Output() deleteRecord = new EventEmitter<String>();
  @Output() addRecordtopending = new EventEmitter<String>();

  
  status_Dict_name ={
    0:'Pending',
    1:"Completed",
    2:"Terminated"
  }
  status_Dict_class={
    0:"bg-primary",
    1:"bg-success",
    2:"bg-danger"
  }
  status_name:string
  status_class:string
  since:string
  test:Date
  enableEdit:boolean
  todoerr:string
  descriptionerr:string
  delete(pk){
    this.dataService.sendPutRequest(`api/todo/${pk}/`,{status:2,action:"Terminated"}).subscribe((data:any)=>{
      if(data.success){
        this.addRecordtopending.emit(pk);
        this.status_name = this.status_Dict_name[2]
        this.status_class = this.status_Dict_class[2]
        this.status = "2"
      }
  })

    // this.dataService.sendDeleteRequest(`api/todo/${pk}`).subscribe((data:any)=>{
    //     if(data.success){
    //       this.deleteRecord.emit(pk);
    //       this.status_name = this.status_Dict_name[2]
    //       this.status_class = this.status_Dict_class[2]
    //       this.status = "2"
    //     }
    // })
  }
  addtopending(pk){
    this.dataService.sendPutRequest(`api/todo/${pk}/`,{status:0,action:"Pending"}).subscribe((data:any)=>{
      if(data.success){
        this.addRecordtopending.emit(pk);
        this.status_name = this.status_Dict_name[0]
        this.status_class = this.status_Dict_class[0]
        this.status = "0"
      }
  })
  }

  addtocomplete(pk){
    
    this.dataService.sendPutRequest(`api/todo/${pk}/`,{status:1,action:"Completed"}).subscribe((data:any)=>{
      if(data.success){
        this.addRecordtopending.emit(pk);
        this.status_name = this.status_Dict_name[1]
        this.status_class = this.status_Dict_class[1]
        this.status = "1"
      }
  })
  }
  
  updateTask({title,description,pk}){
    this.todoerr =""
    this.descriptionerr =""
    if(title.length === 0) this.todoerr = "Please Enter task"
    if(description.length === 0) this.descriptionerr = "Please enter description"
    if(this.todoerr.length !== 0 ||  this.descriptionerr.length !== 0) return
    this.dataService.setPatchRequest(`api/todo/`,{title,description,pk}).subscribe((data:any)=>{
      if(data){
        data
        this.title = data.title
        this.description = data.description
        this.enableEdit = false
      }
    })

  }

  editmode(flag){
    this.enableEdit =flag
  }

  ngOnInit(): void {
    this.enableEdit = false
    this.status_name = this.status_Dict_name[this.status]
    this.status_class = this.status_Dict_class[this.status]
    this.test = new Date(this.created_at)
    this.since = moment(new Date(this.created_at)).fromNow()
  }

}
