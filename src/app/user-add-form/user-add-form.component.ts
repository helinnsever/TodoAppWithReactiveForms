import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { User } from '../user/user';


@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.css']
})
export class UserAddFormComponent implements OnInit {
  
  userAddForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
})

createUserAddForm(){
  this.userAddForm=this.formBuilder.group({
    id:["",Validators.required],
    name:["",Validators.required],
  })
}
  constructor(private formBuilder : FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,) { }
  user: User={id:0,name:""}
  ngOnInit(): void {
    this.createUserAddForm();
  }

  

add(){
  if(this.userAddForm.valid){
   let todoModel=Object.assign({}, this.userAddForm.value)
   this.userService.add(todoModel).subscribe(data=>{
    this.toastrService.success("BAŞARILI")
   })
   }
  else{
    this.toastrService.error("HATA OLUŞTU")
  }
    }


}
