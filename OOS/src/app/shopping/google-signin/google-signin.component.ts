import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { SpinnerService } from '../../shared/services/spinner.service';
import { Router } from '@angular/router';
import { CreateUserModel } from '../models/user/create-user/create-user';

declare const gapi: any;

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.css']
})
export class GoogleSigninComponent implements OnInit {

  constructor(private accountService: AccountService, private spinnerService: SpinnerService, private router: Router) { }
  public auth2: any;
  ngOnInit() {
  }
  ngAfterViewInit() {
    let that = this;
    gapi.load('auth2', function () {
      that.auth2 = gapi.auth2.init({
        client_id: '1054298403500-59hq7dhroeh6j1kk0i23fnmolsk02k4c.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
      that.attachSignin(document.getElementById('signin-button'));
    });
  };

  attachSignin(element) {
    let that = this;
    that.auth2.attachClickHandler(element, {},
      (googleUser) => {
        this.afterLogin(googleUser);
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

  storeSession(data) {
    sessionStorage.setItem('user', JSON.stringify(data));
    this.accountService.setUserSession();
    this.router.navigateByUrl('/')
  }

  afterLogin(googleUser) {
    this.spinnerService.turnOffSpinner();
    this.accountService.checkUserExist(googleUser.getBasicProfile().getEmail()).
      subscribe(email => {
        this.spinnerService.turnOffSpinner();
        if (email) {
          sessionStorage.setItem('user', JSON.stringify(email));
          this.accountService.setUserSession();
          this.router.navigateByUrl('/')
        }
        else {
          var user = new CreateUserModel();
          user.firstName = googleUser.getBasicProfile().getFamilyName();
          user.lastName = googleUser.getBasicProfile().getGivenName();
          user.email = googleUser.getBasicProfile().getEmail();
          user.image = googleUser.getBasicProfile().getImageUrl();
          user.password = "Aa@123456789";
          user.passwordConfirm = "Aa@123456789";
          user.gender = 1;
          console.log(user);
          this.accountService.add(user).subscribe(value => {
            this.storeSession(value);
          })
        }
      });

  }
}