import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../shared/user';
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
      this.user.gender=true;
    this.userservice.add(this.user).subscribe(res => {
      this.router.navigateByUrl('../');
    });
  }

}
