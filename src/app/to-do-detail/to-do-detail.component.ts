import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoService } from '../services/to-do.service';
import { ToDo } from '../to-do/todo';

@Component({
  selector: 'app-to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.css']
})
export class ToDoDetailComponent implements OnInit {

  todo: ToDo={userId:0,id:0,title:"",completed:true};
  constructor(private todoService: ToDoService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getTodoDetailsById(params["id"])
  })
 }

 getTodoDetailsById(id:number){
  this.todoService.getTodoDetailsById(id).subscribe(data=>{
    this.todo=data;
  })
 }


}
