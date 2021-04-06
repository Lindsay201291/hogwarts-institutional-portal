import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  /* transform(value: any, ...args: any[]): any {
    return null;
  } */

  transform(date: any, args?: any): any {
    if (date) {
      const dateAsString = date.split('-');
      // let ageDifMs = Date.now() - new Date(date).getTime();
      const ageDifMs = Date.now() - new Date(dateAsString[2], dateAsString[1], dateAsString[0]).getTime();
      const ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    } else {
      return null;
    }
  }

}
