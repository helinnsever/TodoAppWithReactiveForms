import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ToDoService } from '../services/to-do.service';
import { ToDo } from '../to-do/todo';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private todoService: ToDoService,
    private toastrService: ToastrService) { }
  todo: ToDo={userId:0,id:0,title:"",completed:true};
  todoUpdateForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
})
 
createTodoUpdateForm(){
  this.todoUpdateForm=this.formBuilder.group({
    userId:["",Validators.required],
    id:["",Validators.required],
    title:["",Validators.required],
    completed:["",Validators.required]
  })
}
  
  ngOnInit(): void {
    this.createTodoUpdateForm();
  }

  update() {
    if (this.todoUpdateForm.valid) {
      let todoModel = Object.assign({}, this.todoUpdateForm.value);
      this.todoService.update(this.todo.id, todoModel).subscribe((response) => {
        this.toastrService.info('Todo güncellendi', todoModel.title);
      });
    } else {
      this.toastrService.warning('Formunuz eksik', );
    }
  }

}
