import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderComponent } from './order/order.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { PaymentComponent } from './cart/payment/payment.component';
import { ShippingInfoComponent } from './cart/shipping-info/shipping-info.component';
import { ThankyouComponent } from './cart/thankyou/thankyou.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { SearchComponent } from './search/search.component';

const shoppingRoutes: Routes = [
  {
    path: '',
    component: ShoppingComponent,
    children: [
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      {
        path: 'cart',
        children: [
          { path: '', component: ShoppingCartComponent },
          { path: 'shipping-info', component: ShippingInfoComponent },
          { path: 'payment', component: PaymentComponent },
          { path: 'thankyou', component: ThankyouComponent },
        ]
      },
      {
        path: 'category',
        children: [
          { path: 'id', component: ProductListComponent },
          { path:':id',component: CategoryDetailsComponent}
        ]
      },
      {
        path: 'product',
        children: [
          { path: ':id', component: ProductDetailComponent },
        ]
      },
      { path: 'search', component: SearchComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(shoppingRoutes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
