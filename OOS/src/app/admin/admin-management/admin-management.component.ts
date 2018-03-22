import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from "ng5-breadcrumb";

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.css']
})
export class AdminManagementComponent implements OnInit {

  constructor(
    private breadcrumbService:BreadcrumbService
  ) { }

  ngOnInit() {
    this.breadcrumbService.addFriendlyNameForRoute('/admin', 'Admin');
    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager', 'Manager');

    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/orders', 'Orders');
    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/orders/create', 'Create');
    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/orders/edit', 'Edit');

    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/products', 'Products'); 
    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/products/create', 'Create'); 
    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/products/edit', 'Edit'); 

    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/users', 'Users');
    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/users/create', 'Create');

    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/categories', 'Categories');
    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/categories/create', 'Create');

  }
}
