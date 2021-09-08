import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[]=[]
  user: User={id:0,name:""}
  filterText:string=""
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    
    this.userService.getUsers().subscribe(data=>{
      this.users=data;
      this.user=this.userService.get()
      this.users.push(this.user)
    })
  }

}
