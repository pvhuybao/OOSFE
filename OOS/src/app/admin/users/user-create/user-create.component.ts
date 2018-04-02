import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  
  user = new UserModel;

  isInvalid = false;

  userValidation = new Object;

  listUsers: UserModel[]

  constructor(
    private userservice: UserService,
    private router: Router,
    private spinnerService: SpinnerService
  ) {

  }

  ngOnInit() {
    this.user.gender = true;

    this.user.image = "http://farm9.staticflickr.com/8130/29541772703_6ed8b50c47_b.jpg";

    this.userservice.get().subscribe(data => {
      this.listUsers = data
    })
  }
  add() {
    this.spinnerService.startLoadingSpinner();

    this.userservice.add(this.user)
      .subscribe(res => {
        this.spinnerService.turnOffSpinner();

        this.router.navigate(['../admin/manager/users']);
      })
  }


}
