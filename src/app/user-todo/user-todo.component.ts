import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoService } from '../services/to-do.service';
import { ToDo } from '../to-do/todo';

@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.css']
})
export class UserTodoComponent implements OnInit {

  usertodo: ToDo[]=[]
  constructor(private todoService: ToDoService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getTodosByUserId(params["userId"])
  })
 }

  getTodosByUserId(userId:number){
    this.todoService.getTodosByUserId(userId).subscribe(data=>{
      this.usertodo=data;
    })
   }

}
