import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Products2RoutingModule } from './products2-routing.module';
import { Products2Component } from './products2.component';


@NgModule({
  declarations: [
    Products2Component
  ],
  imports: [
    CommonModule,
    Products2RoutingModule
  ]
})
export class Products2Module { }
