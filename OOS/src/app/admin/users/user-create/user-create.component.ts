import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user = new UserModel;
  confirmpassword: string;

  constructor(private userservice: UserService, private router: Router) {

  }

  ngOnInit() {
    this.user.gender = true;
    this.user.image = "http://farm9.staticflickr.com/8130/29541772703_6ed8b50c47_b.jpg"
  }
  add() {
    this.userservice.add(this.user).subscribe(res => {
      this.router.navigate(['../admin/users']);
    });
  }


}
