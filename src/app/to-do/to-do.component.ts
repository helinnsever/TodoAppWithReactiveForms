import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/to-do.service';
import { ToDo } from './todo';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  
  todos: ToDo[]=[]
  todo: ToDo={userId:0,id:0,title:"",completed:true};
  constructor(private toDoService:ToDoService, private toastrService : ToastrService) { }
  page: number = 1;
  itemsPerPage:number=10;
  filterText:string=""
 
  ngOnInit(): void {
    this.toDoService.getToDos().subscribe(data=>{
      this.todos=data;
      this.todo=this.toDoService.get()
      this.todos.push(this.todo)
   
    
 })

 

}

delete(id:number){
  this.toDoService.delete(id).subscribe(data=> {
    this.todos = this.todos.filter((t) => t.id !== id);
      this.toastrService.success("Todo silindi");
  
  })
 }

 

 
       
}