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
import { EditOrderComponent } from './orders/edit-order/edit-order.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
  ],
  declarations: [AdminPageComponent, CategoriesComponent, ProductsComponent, OrdersComponent, UsersComponent, OrderDetailComponent, ProductDetailComponent, EditOrderComponent],
  providers: [CategoryService]
})
export class AdminModule { }
