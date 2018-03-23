import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './cart/shopping-cart/shopping-cart.component';
import { OrderComponent } from './order/order.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CategoryService } from './services/category.service';
import { WidgetProductsComponent } from './widget-products/widget-products.component';
import { WidgetBoxComponent } from './widget-box/widget-box.component';
import { CartService } from './services/cart.service';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ProductService } from './services/product.service';
import { CartComponent } from './home-page/cart/cart.component';
import { PaymentComponent } from './cart/payment/payment.component';
import { ThankyouComponent } from './cart/thankyou/thankyou.component';
import { ShippingInfoComponent } from './cart/shipping-info/shipping-info.component';

import { OrderService } from './services/order.service';



import { SearchComponent } from './search/search.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ContactComponent } from './contact/contact.component';
import { EmailService } from './services/email.service';

//self-services
//import { SpinnerService } from '../shared/services/spinner.service';

@NgModule({
  imports: [
    CommonModule,
    ShoppingRoutingModule,  
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [HomePageComponent, 
                  ProductDetailComponent, 
                  ShoppingCartComponent, 
                  OrderComponent, 
                  OrderConfirmComponent, 
                  ProductListComponent, 
                  ShoppingComponent, 
                  ListCategoriesComponent,
                  WidgetProductsComponent,
                  WidgetBoxComponent,
                  CategoryDetailsComponent,
                  CartComponent,
                  PaymentComponent,
                  ThankyouComponent,
                  ShippingInfoComponent,
                  SearchComponent,
                  ContactComponent
                ],  

  providers: [
    CategoryService, 
    ProductService, 
    CartService,
    EmailService,
    OrderService
  ]
})
export class ShoppingModule { }
