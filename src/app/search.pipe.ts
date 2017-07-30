import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array, search) {
    if(array && search != '') {
      const searchArg = search.toLowerCase();
      let len = 0;
      return array.filter(user => {
        if(((user.lastName.toLowerCase() + ' ' + user.firstName.toLowerCase()).search(searchArg) != -1 || (user.firstName.toLowerCase() + ' ' + user.lastName.toLowerCase()).search(searchArg) != -1) && len < 6) {
          len++;
          return true;
        } else {
          return false;
        }
      })
    }
  }
}
