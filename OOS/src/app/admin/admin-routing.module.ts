import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../auth/auth-guard.service';

import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { EditOrderComponent } from './orders/edit-order/edit-order.component';
import { CreateCategoryComponent } from './categories/createcategory/createcategory.component';
import { EditCategoryComponent } from './categories/editcategory/editcategory.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component'
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { OverviewCategoriesComponent } from './categories/overview-categories/overview-categories.component'
import { OverviewUsersComponent } from './users/overview-users/overview-users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component'
import { ConfigurationComponent } from './configuration/configuration.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: AdminLoginComponent },
      {
        path: 'manager', component: AdminManagementComponent,
        canActivate: [AuthGuardService],
        canActivateChild: [AuthGuardService],
        children: [
          { path: '', redirectTo: 'products', pathMatch: 'full' },
          {
            path: 'users',
            children: [
              { path: '', component: OverviewUsersComponent },
              { path: 'create', component: UserCreateComponent },
              { path: ':id', component: UserEditComponent },
            ]
          },

          { path: 'products', component: ProductsComponent },
          { path: 'products/create', component: ProductCreateComponent },
          { path: 'products/edit', component: ProductEditComponent },
          { path: 'product-details', component: ProductDetailComponent },
          {
            path: 'categories',
            children: [
              { path: '', component: OverviewCategoriesComponent },
              { path: 'create', component: CreateCategoryComponent },
              { path: ':id', component: EditCategoryComponent },
            ]
          },
          { path: 'orders', component: OrdersComponent },
          { path: 'users', component: UsersComponent },
          { path: 'orders/create', component: CreateOrderComponent },
          //{ path: 'orders/edit/:id', component: EditOrdersComponent },
          { path: 'login', component: AdminLoginComponent },
          { path: 'orders/edit/:id', component: EditOrderComponent },
          { path: 'config', component: ConfigurationComponent }
        ]
      },

    ]
  }


  ,];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
