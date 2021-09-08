import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: User[], filterText: string): User[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?users.filter((u:User)=>u.name.toLocaleLowerCase().indexOf(filterText)!==-1):users;
  }

}
