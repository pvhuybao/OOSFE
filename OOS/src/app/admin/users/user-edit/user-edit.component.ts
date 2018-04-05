import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'long-ng5-breadcrumb';
import { SpinnerService } from '../../../shared/services/spinner.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user = new UserModel();
  constructor(
    private userservice: UserService,
    private router: Router,
    private activatedroute: ActivatedRoute,
    private spinnerService: SpinnerService,
    private breadcrumbService:BreadcrumbService
  ) { }

  ngOnInit() {
    this.user.id = this.activatedroute.snapshot.params.id;
    this.getId();
    this.breadcrumbService.addFriendlyNameForRouteRegex('/admin/manager/users/[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}', this.displayNameForUser());
  }

  displayNameForUser()
  {
    var user = this.userservice.setUser();
    return "User: " + user.username;
  }

  getId() {
    this.spinnerService.startLoadingSpinner();

    this.userservice.getById(this.user.id).subscribe(value => {
      this.spinnerService.turnOffSpinner();

      this.user = value;

    });
  }
  edit() {
    this.spinnerService.startLoadingSpinner();

    this.userservice.edit(this.user).
      subscribe(res => {
        this.spinnerService.turnOffSpinner();

        this.router.navigate(['../admin/manager/users']);
      });
  }

}
