import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicsComponent } from './pages/basics/basics.component';
import { FlyPipe } from './pipes/fly.pipe';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { OrderComponent } from './pages/order/order.component';
import { SortPipe } from './pipes/sort.pipe';
import { UpperPipe } from './pipes/upper.pipe';



@NgModule({
  declarations: [
    BasicsComponent,
    FlyPipe,
    NoCommonsComponent,
    NumbersComponent,
    OrderComponent,
    SortPipe,
    UpperPipe,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    BasicsComponent,
    NoCommonsComponent,
    NumbersComponent,
    OrderComponent,
  ]
})
export class SalesModule { }
