import { Component } from '@angular/core';

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
