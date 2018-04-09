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
import { EditorComponent } from './editor/editor.component';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';
import { FeedbackDetailComponent } from './customer-feedback/feedback-detail/feedback-detail.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminPageComponent ,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: AdminLoginComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'manager', component: AdminManagementComponent,        
        canActivateChild: [AuthGuardService],
        children: [
          { path: '', redirectTo: 'products', pathMatch: 'full' },
          {
            path: 'users',
            children: [
              { path: '', component: OverviewUsersComponent,data: {title: 'User'} },
              { path: 'create', component: UserCreateComponent,data: {title: 'Create User'} },
              { path: ':id', component: UserEditComponent, data: {title: 'Edit User'} },
            ]
          },

          { path: 'products', component: ProductsComponent,data: {title: 'Product'} },
          { path: 'products/create', component: ProductCreateComponent,data: {title: 'Create Product'} },
          { path: 'products/edit/:id', component: ProductEditComponent,data: {title: 'Edit Product'} },
          { path: 'product-details', component: ProductDetailComponent,data: {title: 'Product Detail'} },
          {
            path: 'categories',
            children: [
              { path: '', component: OverviewCategoriesComponent, data: {title: 'Category'} },
              { path: 'create', component: CreateCategoryComponent, data: {title: 'Create Caterogy'} },
              { path: ':id', component: EditCategoryComponent, data: {title: 'Edit Category'} },
            ]
          },
          {
          path: 'customerfeedback',
            children: [
              { path: '', component: CustomerFeedbackComponent, data: {title: 'Customer FeedBack'} },
              { path: ':id', component: FeedbackDetailComponent, data: {title: ' FeedBack'} },
            ]
          },

          { path: 'orders', component: OrdersComponent,data: {title: 'Orders'} },
          { path: 'users', component: UsersComponent,data: {title: 'Users'} },
          { path: 'orders/create', component: CreateOrderComponent,data: {title: 'Create Order'}  },
          //{ path: 'orders/edit/:id', component: EditOrdersComponent },
          { path: 'login', component: AdminLoginComponent,data: {title: 'Login'} },
          { path: 'orders/edit/:id', component: EditOrderComponent,data: {title: 'Edit Order'} },
          { path: 'config', component: ConfigurationComponent,data: {title: 'Config'} },
          { path: 'shipping-return', component: EditorComponent, data: { page: "return", title : "shipping-return"}},
          { path: 'shipping-guide', component: EditorComponent, data: { page: "guide",title : "shipping-guide"}},
          { path: 'faq', component: EditorComponent, data: { page: "faq",title : "faq"}}
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
