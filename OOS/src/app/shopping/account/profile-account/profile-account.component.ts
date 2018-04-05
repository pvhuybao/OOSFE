import { Component, OnInit } from '@angular/core';
import { IMyDpOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import { ToasterService } from 'angular2-toaster';

import { AccountService } from '../../services/account.service';
import { GenderType, CreateUserModel } from '../../models/user/create-user/create-user';
import { SpinnerService } from '../../../shared/services/spinner.service';


@Component({
  selector: 'app-profile-account',
  templateUrl: './profile-account.component.html',
  styleUrls: ['./profile-account.component.css']
})
export class ProfileAccountComponent implements OnInit {
  idUser: string
  user: any
  public genderEnum = GenderType
  listGender: any
  listCountry = new Array<string>();
  private selDate: IMyDate = { year: 0, month: 0, day: 0 };


  constructor(private ss: AccountService, private spinnerService: SpinnerService, private toasterService: ToasterService) {
    this.listCountry.push("VietNam")
  }

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };

  onDateChanged(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    // this.selDate = event.date;
    this.user.dateOfBirth = event.date.month + "/" + event.date.day + "/" + event.date.year

  }

  ngOnInit() {

    this.ss.getUserSession().subscribe(data => {
      console.log("Profile user id = ", data.id);
      this.idUser = data.id
    })
    this.ss.setUserSession()

    this.getProfile();
    this.getStatus();
    var date = new Date("2013-12-28T08:30:17.795Z")
    console.log(date.getDate());
    console.log(date.getFullYear());
    console.log(date.getMonth() + 1);
  }

  getProfile() {
    this.ss.getById(this.idUser).subscribe(data => {
      this.user = data
      this.user.gender += 1;
      console.log(data.dateOfBirth)
      if (data.dateOfBirth != null) {
        var date = new Date(data.dateOfBirth)
        this.selDate = {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        };
      }
      else {
        this.selDate = null;
      }

    }
    )
  }

  getStatus() {
    this.listGender = Object.keys(this.genderEnum).filter(Number);
  }

  update() {
    this.spinnerService.startLoadingSpinner()
    var updateUser = Object.assign({}, this.user);
    updateUser.gender -= 1;
    this.ss.put(updateUser).subscribe(data => {
      this.spinnerService.turnOffSpinner()
      this.toasterService.pop("success", "success", "You have successfully updated your profile");
    })
  }

}
