import { Component, OnInit } from '@angular/core';
import { UserModel, GenderType } from '../../models/users';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { SpinnerService } from '../../../shared/services/spinner.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})

// @Component({
//   selector: 'register-success',
//   template: '<h2>Congratulation!</h2>'+
//             '<p>You have successfully register your account</p>'
// })
export class CreateAccountComponent implements OnInit {

  user = new UserModel;
  isInvalid = false;
  userValidation = new Object;
  public isDisabled:boolean;
  public gender = GenderType;
  public item: number;
  public keys: any;

  constructor(
    private accountService: AccountService, 
    private spinnerService:SpinnerService,
    private router:Router
  ) { }

  ngOnInit() {
    this.isDisabled = false;
  }

  add() {
    this.isDisabled = true;
    this.spinnerService.startLoadingSpinner();

    this.user.gender = 0;
    this.user.firstName = this.user.username;
    this.user.lastName = this.user.username;
    this.user.image = "http://farm9.staticflickr.com/8130/29541772703_6ed8b50c47_b.jpg";

    this.accountService.add(this.user)
      .subscribe(res => {
        this.router.navigate(['']);
      },
        (error) => {
          this.spinnerService.turnOffSpinner();

          this.userValidation = JSON.parse(error._body);
          this.isInvalid = true;
        }
      )
  }

}
