import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';

import { AdminPageComponent } from './admin-page/admin-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CategoryService } from './services/category.service';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component'
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component'
import { UserService } from './services/user.service';
import { ProductService } from './services/Product.service';
import { OverviewCategoriesComponent } from './categories/overview-categories/overview-categories.component'
import { OrdersService } from './services/orders.service';
import { OverviewUsersComponent } from './users/overview-users/overview-users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
  ],

  declarations: [
    AdminPageComponent, 
    CategoriesComponent, 
    ProductsComponent, 
    OrdersComponent, 
    UsersComponent, 
    OrderDetailComponent, 
    ProductDetailComponent, 
    OverviewCategoriesComponent,
    CategoryDetailComponent,
    UserCreateComponent, 
    UserEditComponent, 
    OverviewUsersComponent,
    UserDetailComponent
  ],
  providers: [
    ProductService,
    CategoryService, 
    UserService,
    OrdersService]
})
export class AdminModule { }
