import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit {

  isUpper: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeUpperLower() {
    this.isUpper = !this.isUpper;
  }

}
