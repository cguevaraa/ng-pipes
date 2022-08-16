import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { UpperPipe } from './pipes/upper.pipe';


@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderComponent,
    UpperPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderComponent,
  ]
})
export class SalesModule { }
