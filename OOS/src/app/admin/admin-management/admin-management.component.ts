import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from "ng5-breadcrumb";

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.css']
})
export class AdminManagementComponent implements OnInit {

  constructor(private breadcrumbService:BreadcrumbService ) {
    
  }

  ngOnInit() {
  }

}
