import { Component, OnInit } from '@angular/core';
import { LoginAccountModel } from '../../models/loginAccount';
import { AccountService } from '../../services/account.service';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { CreateUserModel } from '../../models/user/create-user/create-user';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.component.html',
  styleUrls: ['./login-account.component.css']
})

export class LoginAccountComponent implements OnInit {

  email: string = '';
  password: string = '';
  remember: boolean = false;

  user: CreateUserModel;

  constructor(
    private router: Router,
    private accountService: AccountService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
  }

  login() {
    this.spinnerService.startLoadingSpinner();

    let login = new LoginAccountModel();
    login.email = this.email;
    login.password = this.password;
    login.remember = this.remember;

    this.accountService.loginAccount(login).subscribe((data: any) => {
      this.spinnerService.turnOffSpinner();
      if(data.userName){
        sessionStorage.setItem('user',JSON.stringify(data));
        this.accountService.setUserSession();
        this.router.navigateByUrl('/')
      } 
      else{
        alert('Your username or password is incorrect')
      } 
    });
  }
}
