import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'even'
})
export class EvenPipe implements PipeTransform {

  transform(value: any) {
      
    for (var i in value) {
        if (Number(i) % 2 == 0) {
            return [value[i], value[i+1]];
        }
    }
  }

}
