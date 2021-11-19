import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAuthRoutingModule } from './admin-auth-routing.module';
import { AdminAuthComponent } from './admin-auth.component';
import {MaterialModule} from "../../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AdminAuthComponent
  ],
  imports: [
    CommonModule,
    AdminAuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminAuthModule { }
