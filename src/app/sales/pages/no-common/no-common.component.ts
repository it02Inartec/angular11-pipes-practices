import { Component } from '@angular/core';

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
}
