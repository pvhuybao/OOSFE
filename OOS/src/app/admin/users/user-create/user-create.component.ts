import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UserModel, GenderType } from '../../models/user';
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
  private genderEnum = GenderType;
  listGender: any;
  phone: string;


  //for validate
  listUsers: Array<Object>;

  constructor(
    private userservice: UserService,
    private router: Router,
    private spinnerService: SpinnerService
  ) {

  }

  ngOnInit() {    
    
    this.listGender = Object.keys(this.genderEnum).filter(Number);
    this.user.gender = 1;
    this.user.image = "http://farm9.staticflickr.com/8130/29541772703_6ed8b50c47_b.jpg";    
    this.user.photo = "http://farm9.staticflickr.com/8130/29541772703_6ed8b50c47_b.jpg";    

    this.userservice.get("","","",10,1).subscribe(data => {
      this.listUsers = data.items
    })

    
  }
  
  add() {
    this.spinnerService.startLoadingSpinner();    
    this.user.userName = this.user.email;    
    this.userservice.add(this.user)
      .subscribe(res => {
        this.spinnerService.turnOffSpinner();
        this.router.navigate(['../admin/manager/users']);
      })
  }
}
