import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
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
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './cart/payment/payment.component';
import { ThankyouComponent } from './cart/thankyou/thankyou.component';
import { ShippingInfoComponent } from './cart/shipping-info/shipping-info.component';

@NgModule({
  imports: [
    CommonModule,
    ShoppingRoutingModule
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
                  CartComponent,
                  PaymentComponent,
                  ThankyouComponent,
                  ShippingInfoComponent
                ],
  providers: [CategoryService, ProductService, CartService]
})
export class ShoppingModule { }
