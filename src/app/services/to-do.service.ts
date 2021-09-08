import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { ToDo } from '../to-do/todo';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  apiUrl="http://localhost:3000/todos"
  todo: ToDo={userId:0,id:0,title:"",completed:true};


  constructor(private httpClient:HttpClient,
    private formBuilder : FormBuilder) { }

  getToDos():Observable<ToDo[]>{
    
    return this.httpClient.get<ToDo[]>(this.apiUrl);

  }

  getTodosByUserId(userId:number):Observable<ToDo[]>{
    
    return this.httpClient.get<ToDo[]>(this.apiUrl+"?userId="+userId);

  }

  getTodoDetailsById(id:number):Observable<ToDo>{
    
    return this.httpClient.get<ToDo>(this.apiUrl+"/"+id);
  
}


add(todo : ToDo){
  // return this.httpClient.post(this.apiUrl,todo)
  return this.httpClient.post<ToDo>(this.apiUrl, todo);

  
}

get(){
  return this.todo;
}

delete(id: number): Observable<ToDo> {
  return this.httpClient.delete<ToDo>(this.apiUrl + "/" + id);
}

update(id: number, todo: ToDo): Observable<ToDo> {
  return this.httpClient.put<ToDo>(this.apiUrl + '/' + id, todo);
}




}
