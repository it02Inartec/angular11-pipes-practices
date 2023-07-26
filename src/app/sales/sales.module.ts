import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonComponent } from './pages/no-common/no-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { UppercasePipe } from './pipes/uppercase.pipes';
import { FlyPipe } from './pipes/fly.pipes';
import { SortByPipe } from './pipes/sort-by.pipe';



@NgModule({
  declarations: [
    NumbersComponent, 
    NoCommonComponent, 
    BasicsComponent, 
    FlyPipe,
    OrderComponent,
    UppercasePipe,
    SortByPipe
  ],
  exports: [
    NumbersComponent, 
    NoCommonComponent, 
    BasicsComponent, 
    OrderComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
