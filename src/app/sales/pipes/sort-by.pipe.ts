import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Heroe[], sortBy?: keyof Heroe | ''): Heroe[] {
    // console.log({heroes, sortBy });
    switch (sortBy) {
      case 'name':
        return heroes.sort( (a,b) => (a.name > b.name ) ? 1 : -1 );
      case 'fly':
        return heroes.sort( (a,b) => (a.fly > b.fly ) ? 1 : -1 );
      case 'color':
        return heroes.sort( (a,b) => (a.color > b.color ) ? 1 : -1 );
      default:
        return heroes;
    }
  }

}
