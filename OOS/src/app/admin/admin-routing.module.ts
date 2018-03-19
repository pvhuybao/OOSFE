import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../auth/auth-guard.service';

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
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { OverviewCategoriesComponent } from './categories/overview-categories/overview-categories.component'
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      {
        path: 'users',
        children: [
          { path: '', component: UsersComponent, pathMatch: 'full' },
          { path: 'edit/:id', component: UserEditComponent },
          { path: 'create', component: UserCreateComponent }
        ]
      },
      { path: 'products', component: ProductsComponent },
      { path:'product-details',component:ProductDetailComponent},
      { 
        path: 'categories', 
        component: CategoriesComponent ,
        children: [
          { path: '', component: OverviewCategoriesComponent },
          { path: 'CreateCategory', component: CreateCategoryComponent },
          { path: 'EditCategory/:id', component: EditCategoryComponent }
        ]
      },
      { path: 'orders', component: OrdersComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: UserDetailComponent},
      { path: 'orders/edit', component: EditOrderComponent },
      { path: 'orders/create', component: CreateOrderComponent },
      //{ path: 'orders/edit/:id', component: EditOrdersComponent },
    ]
  },];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
