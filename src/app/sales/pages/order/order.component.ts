import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  isUpper: boolean = true;

  orderBy?: keyof Heroe;

  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red
    },
    {
      name: 'Gokú',
      fly: true,
      color: Color.red
    }
  ]

  changeUpperLower() {
    this.isUpper = !this.isUpper;
  }

  changeOrder( value: keyof Heroe) {
    this.orderBy = value;
  }

}
