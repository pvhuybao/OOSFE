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
import { EditOrderComponent } from './orders/edit-order/edit-order.component';
import { OverviewCategoriesComponent } from './categories/overview-categories/overview-categories.component'


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
      { path:'product-details',component:ProductDetailComponent},
      { 
        path: 'categories', 
        component: CategoriesComponent ,
        children: [
          { path: 'overview-categories', component: OverviewCategoriesComponent }
        ]
      },
      { path: 'orders', component: OrdersComponent },
      { path: 'users', component: UsersComponent },
      { path: 'orders/edit', component: EditOrderComponent }
      //{ path: 'orders/create', component: CreateOrdersComponent },
      //{ path: 'orders/edit/:id', component: EditOrdersComponent },

    ]
  },];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
