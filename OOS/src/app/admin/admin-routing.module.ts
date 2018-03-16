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
import { ProductDetailComponent } from './products/product-detail/product-detail.component'

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'orders', component: OrdersComponent },
    ]
  },];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
