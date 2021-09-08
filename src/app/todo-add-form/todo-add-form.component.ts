import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ToDoService } from '../services/to-do.service';
import { ToDo } from '../to-do/todo';


@Component({
  selector: 'app-todo-add-form',
  templateUrl: './todo-add-form.component.html',
  styleUrls: ['./todo-add-form.component.css']
})
export class TodoAddFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private toDoService: ToDoService,
    private toastrService : ToastrService) { }
  
  todoAddForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
})
  todos: ToDo[] =[]
  todo: ToDo={userId:0,id:0,title:"",completed:true};
  
  createTodoAddForm(){
    this.todoAddForm=this.formBuilder.group({
      userId:["",Validators.required],
      id:["",Validators.required],
      title:["",Validators.required],
      completed:["",Validators.required]
    })
  }
  ngOnInit(): void {
    this.createTodoAddForm();
  }

  

  add(){
    if(this.todoAddForm.valid){
     let todoModel=Object.assign({}, this.todoAddForm.value)
     this.toDoService.add(todoModel).subscribe(data=>{
      this.toastrService.success("BAŞARILI")
     })
     }
    else{
      this.toastrService.error("HATA OLUŞTU")
    }
      }

}
