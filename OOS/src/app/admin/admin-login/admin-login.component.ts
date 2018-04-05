import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../shared/services/spinner.service';
import { LoginAccountModel } from '../models/loginAccount';
import { AccountService } from '../services/account.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { UserModel } from '../models/user';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  remember: boolean = false;
  currentUser=new Subject<UserModel>();

  constructor(
    private router: Router,
    private spinnerService: SpinnerService,
    private accountService: AccountService
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
      if(data.username){
        sessionStorage.setItem('user',JSON.stringify(data));
        this.accountService.setUserSession();
        this.router.navigate(['./admin/manager'])
      } 
      else{
        alert('Your username or password is incorrect')
      }  
    });
  }
}
