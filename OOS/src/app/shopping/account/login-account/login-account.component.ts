import { Component, OnInit } from '@angular/core';
import { LoginAccountModel } from '../../models/loginAccount';
import { AccountService } from '../../services/account.service';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { CreateUserModel } from '../../models/user/create-user/create-user';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
declare var window: any;
declare var FB: any;
@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.component.html',
  styleUrls: ['./login-account.component.css']
})

export class LoginAccountComponent implements OnInit {

  email: string = '';
  password: string = '';
  remember: boolean = false;

  user = new CreateUserModel;

  constructor(
    private router: Router,
    private accountService: AccountService,
    private spinnerService: SpinnerService
  ) { 
    // This function initializes the FB variable 
  
  }

  ngOnInit() {
    this.LoadFacebook();
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

  loginFB(token : string){
    this.accountService.loginFB(token).subscribe((data: any) => {
      if(data.userName){
        sessionStorage.setItem('user',JSON.stringify(data));
        this.accountService.setUserSession();
        this.router.navigateByUrl("/");
        
      } 
      else{
        alert('Login fails')
      } 
  });
}

LoadFacebook(){
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = '//connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

  window.fbAsyncInit = () => {
    console.log("fbasyncinit")

    FB.init({
        appId            : '210161473084823',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.10'
    });
    FB.AppEvents.logPageView();
    // This is where we do most of our code dealing with the FB variable like adding an observer to check when the user signs in
    FB.Event.subscribe('auth.statusChange', (response => {

      if (response.status === 'connected') {
        var accessToken = response.authResponse.accessToken;
        this.loginFB(accessToken);
        FB.logout();
        }

  }));
};
  if (window.FB) {
    window.FB.XFBML.parse();
}
}
}
