import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoDetailComponent } from './to-do-detail/to-do-detail.component';
import { UserTodoComponent } from './user-todo/user-todo.component';
import { NaviComponent } from './navi/navi.component';
import { AlbumComponent } from './album/album.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './pipe/filter.pipe';
import { FiltertodoPipe } from './pipe/filtertodo.pipe';
import { TodoAddFormComponent } from './todo-add-form/todo-add-form.component';
import { UserAddFormComponent } from './user-add-form/user-add-form.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ToDoComponent,
    ToDoDetailComponent,
    UserTodoComponent,
    NaviComponent,
    AlbumComponent,
    FavoriteComponent,
    FilterPipe,
    FiltertodoPipe,
    TodoAddFormComponent,
    UserAddFormComponent,
    TodoUpdateComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"}),
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
