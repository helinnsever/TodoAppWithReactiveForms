import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="http://localhost:3000/users"
  user: User={id:0,name:""}

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<User[]>{
    
    return this.httpClient.get<User[]>(this.apiUrl);

  }

  add(user: User){
    // return this.httpClient.post(this.apiUrl,todo)
    return this.httpClient.post<User>(this.apiUrl, user);
   
  }

  get(){
    return this.user;
  }
}
