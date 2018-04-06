import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowErrorsComponent } from '../../validation/show-errors/show-errors.component';

import { UniqueNameValidatorDirective } from '../../validation/validators/unique-name-validator.directive';
import { EmailValidatorDirective } from '../../validation/validators/email-validator.directive';
import { ConfirmPasswordDirective } from '../../validation/validators/confirm-password.directive';
import { PasswordDirective } from '../../validation/validators/password.directive';

@NgModule({
  imports: [
    CommonModule
  ],

  exports: [
    PasswordDirective,
    ConfirmPasswordDirective,
    EmailValidatorDirective,
    UniqueNameValidatorDirective,
    ShowErrorsComponent
  ],

  declarations: [
    PasswordDirective,
    ConfirmPasswordDirective,
    EmailValidatorDirective,
    UniqueNameValidatorDirective,
    ShowErrorsComponent
  ]
})
export class ValidationModule { }
