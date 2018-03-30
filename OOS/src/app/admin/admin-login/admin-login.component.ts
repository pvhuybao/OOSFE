import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../auth/auth.service'

import { UserLogin, UserLoginProfile } from '../../auth/user-login.model';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private authService: AuthService, 
    private router: Router) { }

  ngOnInit() {
  }

  login(userName: string, password: string){
    let user = new UserLoginProfile();
    //call service get userProfile include tokenId
    if(user.idToken){
      //set token
      this.authService.setUserLogin(true, user);
      //navigate to home page admin url
      this.router.navigate(['/admin/manager']);
    }
    //raise error message login fail
  }
}
