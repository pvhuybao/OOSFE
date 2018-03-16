import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../Model/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user = new UserModel;
  confirmpassword:string;
  gender:string;
  constructor(private userservice:UserService, private router:Router) {

  }

  ngOnInit() {
    this.user.gender=true;
  }
  add() {
    if(this.gender=="male") this.user.gender=true;
    else this.user.gender=false;
    this.userservice.add(this.user).subscribe(res => {
      this.router.navigate(['../admin/users']);
    });
  }
    

}
