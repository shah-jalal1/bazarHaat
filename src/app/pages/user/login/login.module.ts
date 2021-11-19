import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {MaterialModule} from '../../../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
// import {DigitOnlyModule} from '@uiowa/digit-only';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    // DigitOnlyModule
]
})
export class LoginModule { }
