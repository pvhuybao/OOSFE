import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-overview-users',
  templateUrl: './overview-users.component.html',
  styleUrls: ['./overview-users.component.css']
})
export class OverviewUsersComponent implements OnInit {

  listUsers: UserModel[];

  userDel = new UserModel;

  constructor(
    private userService: UserService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.getListUsers();
  }

  get(id) {
    this.userService.getById(id).subscribe(data => {
      this.userDel = data;
    })
  }

  getListUsers() {
    this.userService.get().subscribe(data => {
      this.listUsers = data;
    })
  }

  delete() {
    this.spinnerService.startLoadingSpinner();
    this.userService.delete(this.userDel).subscribe(data => {
      this.spinnerService.turnOffSpinner();
      this.getListUsers();
    });
  }
}
