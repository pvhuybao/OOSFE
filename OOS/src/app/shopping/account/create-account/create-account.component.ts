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

export class CreateAccountComponent implements OnInit {

  user = new UserModel;
  isInvalid = false;
  public isDisabled:boolean;
  isExist:any;
  isExistEmail:any;
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
    this.user.firstName = this.user.username;
    this.user.lastName =this.user.username
    this.user.gender = 0;
    this.user.image = "http://farm9.staticflickr.com/8130/29541772703_6ed8b50c47_b.jpg";

    this.accountService.add(this.user)
      .subscribe(res => {
        this.spinnerService.turnOffSpinner();
        this.router.navigate(['']);
      }
    )
  }

  checkUsername()
  {
    this.accountService.getByUsername(this.user.username).
      subscribe(username => {
        this.isExist = username;
        console.log(this.isExist);
      });
  }

  checkEmail()
  {
    this.accountService.getByEmail(this.user.email).
      subscribe(email => {
        this.isExistEmail = email;
        console.log(this.isExistEmail);
      });
  }

}
