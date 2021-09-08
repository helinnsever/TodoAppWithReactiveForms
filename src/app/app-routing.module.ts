import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ToDoDetailComponent } from './to-do-detail/to-do-detail.component';

import { ToDoComponent } from './to-do/to-do.component';
import { TodoAddFormComponent } from './todo-add-form/todo-add-form.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { UserAddFormComponent } from './user-add-form/user-add-form.component';
import { UserTodoComponent } from './user-todo/user-todo.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component: ToDoComponent},
  {path:"todos", component:ToDoComponent},
  {path:"users/:userId", component: UserTodoComponent },
  {path:"todos/:id", component: ToDoDetailComponent},
  {path:"albums", component: AlbumComponent},
  {path:"favorites", component:FavoriteComponent},
  {path:"todo-add", component: TodoAddFormComponent},
  {path:"user-add", component: UserAddFormComponent},
  {path:"todos/update/:id" , component:ToDoComponent},
  {path:"todo-update", component:TodoUpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
