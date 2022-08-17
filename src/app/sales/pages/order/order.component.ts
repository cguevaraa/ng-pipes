import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  toUpper: boolean = false;
  iconLabel: string = 'pi pi-arrow-circle-up';
  buttonLabel: string = 'to uppercase'

  heroes: Hero[] = [
    {
      name: 'Superman',
      flies: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      flies: false,
      color: Color.black
    },
    {
      name: 'Robin',
      flies: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      flies: false,
      color: Color.red
    },
    {
      name: 'Greenlatern',
      flies: true,
      color: Color.green
    },
  ]

  change() {
    this.toUpper = !this.toUpper;
    if (this.toUpper) {
      this.iconLabel = 'pi pi-arrow-circle-down';
      this.buttonLabel = 'to lowercase'
    } else {
      this.iconLabel = 'pi pi-arrow-circle-up';
      this.buttonLabel = 'to uppercase'
    }

  }
}
