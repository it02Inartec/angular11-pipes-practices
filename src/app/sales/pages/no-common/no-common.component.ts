import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-common',
  templateUrl: './no-common.component.html',
  styles: [
  ]
})
export class NoCommonComponent {

  // I18nSelect
  name: string = 'Jennifer';
  gener: string = 'femine';

  optionsMapping = {
    femine: 'invitarla',
    mascule: 'invitarlo'
  }

  // I18nPlural
  clients: string[] = ['Lucía', 'Mateo', 'Lucas', 'Fernanda'];

  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  changeClient() {
    this.name = 'David';
    this.gener = 'mascule';
  }

  deleteClient() {
    this.clients.pop();
  }

  // keyValuePipe
  persons = {
    name: 'Yorgelis',
    age: 28,
    address: 'Venezuela, Zulia'
  }

  // JsonPipe
  heroes = [
    {
      name: 'Batman',
      fly: false
    },
    {
      name: 'Robin',
      fly: false
    },
    {
      name: 'Superman',
      fly: true
    },
  ];

  // Async Pipe
  myObservable = interval(5000); // 0,2,3,4,5

  valuePromess = new Promise ( (resolve, reject) => {
    setTimeout(()=> {
      resolve('We have data promises');
    }, 3500);
  });
}
