import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {

  // i18nSelect
  name: string = 'Susana';
  gender: string = 'female';

  invitationObj = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  // i18nPlural
  clients: string[] = [
    'María',
    'Pedro',
    'Juan',
    'Rosa'
  ]

  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  
  // KeyValue Pipe
  person = {
    name: 'Humberto',
    age: 35,
    location: 'Paraguay'
  }

  // Async Pipe
  myObservable = interval(1000);
  myPromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('We got the promise data');
    }, 3500);
  })

  changeCustomer() {
    if (this.name === 'Susana') {
      this.name = 'Hernando';
      this.gender = 'male';
    } else {
      this.name = 'Susana';
      this.gender = 'female';
    }
  }

  eraseCustomer() {
    this.clients.shift();
  }
}
