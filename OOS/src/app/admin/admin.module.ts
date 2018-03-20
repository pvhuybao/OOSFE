import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AdminPageComponent } from './admin-page/admin-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { EditOrderComponent } from './orders/edit-order/edit-order.component'
import { OverviewCategoriesComponent } from './categories/overview-categories/overview-categories.component'
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component'
import { CreateCategoryComponent } from './categories/createcategory/createcategory.component';
import { EditCategoryComponent } from './categories/editcategory/editcategory.component'
import { CreateOrderComponent } from './orders/create-order/create-order.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';

import { CategoryService } from './services/category.service';
import { UserService } from './services/user.service';
import { ProductService } from './services/Product.service';
import { OrdersService } from './services/orders.service';
import { ModalService } from './services/modal.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
    

  declarations: [
    AdminPageComponent, 
    CreateCategoryComponent, 
    CategoriesComponent, 
    ProductsComponent, 
    OrdersComponent, 
    UsersComponent, 
    OrderDetailComponent, 
    ProductDetailComponent,
    EditOrderComponent,
    OverviewCategoriesComponent,
    CreateOrderComponent,
    UserCreateComponent, 
    UserEditComponent,
    EditCategoryComponent,
    CreateOrderComponent,
    DeleteConfirmationComponent
  ],
  entryComponents:[
    DeleteConfirmationComponent
  ],
  providers: [
    ProductService,
    CategoryService, 
    UserService,
    OrdersService,
    ModalService,
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ]
})
export class AdminModule { }
