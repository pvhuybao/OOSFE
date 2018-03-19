import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
    // this.getUser();
  }

  // getUser(): void{
  //   var id = this.route.snapshot.paramMap.get("id");
  //   this.userService.getUser(id).subscribe(user => this.user = user);
  // }

  // deleteUser(user: userModel){
  //   this.userService.delete(user).subscribe( a => {
  //       this.router.navigateByUrl("admin/users");
  //   });
  // }

  backClicked() {
    this.location.back();
  }
}
