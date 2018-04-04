import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { CreateUserModel } from '../../models/user/create-user/create-user';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})

export class CreateAccountComponent implements OnInit {

  user = new CreateUserModel;
  isInvalid = false;
  public isDisabled:boolean;
  isExist:any;
  isExistEmail:any;
  userValidation = new Object;
  
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
    
    this.accountService.add(this.user)
      .subscribe(res => {
        this.spinnerService.turnOffSpinner();
        this.router.navigate(['']);
      },
      (error) => {
        this.spinnerService.turnOffSpinner();

        this.userValidation = JSON.parse(error._body);
        this.isInvalid = true;
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
