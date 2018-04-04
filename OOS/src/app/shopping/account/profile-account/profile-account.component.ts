import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { GenderType } from '../../models/user/create-user/create-user';
import { SpinnerService } from '../../../shared/services/spinner.service';
import {IMyDpOptions} from 'mydatepicker';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-profile-account',
  templateUrl: './profile-account.component.html',
  styleUrls: ['./profile-account.component.css']
})
export class ProfileAccountComponent implements OnInit {

  idDefault = "1b5db606a757474189743c7bd4221d2d"
  user: any
  public genderEnum = GenderType
  listGender : any
  listCountry = new Array<string>();

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
};



  constructor(private ss: AccountService, private spinnerService: SpinnerService,private toasterService: ToasterService) {


    this.listCountry.push("VietNam")
  }

  ngOnInit() {
    this.getProfile();
    this.getStatus();

  }

  getProfile() {
    this.ss.getById(this.idDefault).subscribe(data => {
      this.user = data
      this.user.gender += 1;
      console.log("Gender =" + data.gender)
    }
    )
  }

  getStatus() {
    this.listGender = Object.keys(this.genderEnum).filter(Number);
  }

  update(){
    this.spinnerService.startLoadingSpinner()
    var updateUser = Object.assign({},this.user);
    updateUser.gender -=1;
    this.ss.put(updateUser).subscribe(data => {
      this.spinnerService.turnOffSpinner()
      this.toasterService.pop("success","success","You have successfully updated your profile");

    })
  }

}
