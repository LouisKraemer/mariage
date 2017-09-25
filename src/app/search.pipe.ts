import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array, search) {
    if(array && search !== '') {
      return array.filter(user => {
        for (const searchArg of search.toLowerCase().split(' ')) {
          if (user.lastName.toLowerCase().search(searchArg) === -1 &&
            user.firstName.toLowerCase().search(searchArg) === -1 &&
            user.secondLastName.toLowerCase().search(searchArg) === -1 &&
            user.secondFirstName.toLowerCase().search(searchArg) === -1) {
            return false;
          }
        }
        return true;
      })
    }
  }
}
