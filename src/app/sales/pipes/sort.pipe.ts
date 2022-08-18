import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: Hero[], sortValue: string): Hero[] {

    switch (sortValue) {
      case 'name':
        return arr.sort((a, b) => (a.name > b.name) ? 1 : -1);

      case 'flies':
        return arr.sort((a, b) => (a.flies < b.flies) ? 1 : -1);

      case 'color':
        return arr.sort((a, b) => (a.color > b.color) ? 1 : -1);

      default:
        return arr;
    }
  }
}
