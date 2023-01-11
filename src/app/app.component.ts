import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  name: string = 'Jennifer miranda';
  value: number = 1000;
  obj: Object = {
    name: 'Yorgelis'
  }

  showName() {
    console.log(this.name);
    console.log(this.value);
  }
}
