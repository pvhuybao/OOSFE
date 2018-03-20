import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { UserModel } from '../../models/user'

@Component({
  selector: 'app-overview-users',
  templateUrl: './overview-users.component.html',
  styleUrls: ['./overview-users.component.css']
})
export class OverviewUsersComponent implements OnInit {

  listUsers: UserModel[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getListUsers();
  }

  getListUsers() {
    this.userService.get().subscribe(data => {
      this.listUsers = data;
    })
  }

  delete(user: UserModel) {
    this.userService.delete(user).subscribe(data => {
      this.getListUsers();
    });
  }
}
