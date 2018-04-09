import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { AccountService } from '../../services/account.service';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { UserModel } from '../../models/user/user';

@Component({
  selector: 'app-wishlist-account',
  templateUrl: './wishlist-account.component.html',
  styleUrls: ['./wishlist-account.component.css']
})
export class WishlistAccountComponent implements OnInit {

  wishListProduct:Array<ProductModel>;
  user:UserModel;
  productID:string;
  idUser: string;

  constructor(
    private productService:ProductService,
    private accountService:AccountService,
    private spinnerService:SpinnerService
  ) { }

  ngOnInit() {
    this.getUser();
    this.getWishListProduc(this.user);
  }

  getUser()
  {
    this.accountService.getUserSession().subscribe(data => {
      console.log("Profile user id = ", data.id);
      this.idUser = data.id
    });
  }

  getWishListProduc(user:UserModel)
  {
    this.accountService.getWishList(this.idUser).subscribe(data =>{
      this.wishListProduct = data;
      console.log(data);
    });
  }

  setId(productId:string) //set product id to remove from wishlist
  {
    this.productID = productId;
  }

  deleteProduct()
  {
    
  }
}
