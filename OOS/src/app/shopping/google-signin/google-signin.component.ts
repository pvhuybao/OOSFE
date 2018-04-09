import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { SpinnerService } from '../../shared/services/spinner.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateUserModel } from '../models/user/create-user/create-user';

declare let gapi: any;

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.css']
})
export class GoogleSigninComponent implements OnInit {

  constructor(private accountService: AccountService, private spinnerService: SpinnerService, private router: Router) { }
  public auth2: any;
  ngOnInit() {
    this.googleInit();
  }
  googleInit() {
    let that = this;
    gapi.load('auth2', function () {
      that.auth2 = gapi.auth2.init({
        client_id: '1054298403500-59hq7dhroeh6j1kk0i23fnmolsk02k4c.apps.googleusercontent.com'
      });
      that.attachSignin(document.getElementById('customBtn'));
    });
  };

  attachSignin(element) {
    let that = this;
    that.auth2.attachClickHandler(element, {},
      (googleUser) => {
        that.accountService.loginviaGoogle(googleUser.getAuthResponse().id_token).subscribe(data => {
          that.storeSession(data);
          gapi.auth2.getAuthInstance().signOut();
          this.router.navigateByUrl('/');
        })
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
  }
  move() {
    this.router.navigateByUrl('/')
  }

  // afterLogin(googleUser) {
  //   console.log(googleUser.getAuthResponse().id_token);
  //   this.spinnerService.turnOffSpinner();
  //   this.accountService.checkUserExist(googleUser.getBasicProfile().getEmail()).
  //     subscribe(email => {
  //       this.spinnerService.turnOffSpinner();
  //       if (email) {
  //         this.storeSession(email);
  //       }
  //       else {
  //         var user = new CreateUserModel();
  //         user.firstName = googleUser.getBasicProfile().getFamilyName();
  //         user.lastName = googleUser.getBasicProfile().getGivenName();
  //         user.email = googleUser.getBasicProfile().getEmail();
  //         user.image = googleUser.getBasicProfile().getImageUrl();
  //         user.password = "Aa@123456789";
  //         user.confirmPassword = "Aa@123456789";
  //         user.gender = 1;
  //         console.log(user);
  //         this.accountService.add(user).subscribe(value => {
  //           this.storeSession(value);
  //         })
  //       }
  //     });
  // }
}