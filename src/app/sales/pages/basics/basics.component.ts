import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {
  lowerName: string = 'jennifer';
  upperName: string = 'JENNIFER';
  fullName: string = 'JeNNifer miRanda';

  date: Date = new Date();
}
