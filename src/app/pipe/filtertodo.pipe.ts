import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from '../to-do/todo';

@Pipe({
  name: 'filtertodo'
})
export class FiltertodoPipe implements PipeTransform {

  transform(todos: ToDo[], filterText:string): ToDo[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?todos.filter((t:ToDo)=>t.title.toLocaleLowerCase().indexOf(filterText)!==-1):todos;
  }

}
