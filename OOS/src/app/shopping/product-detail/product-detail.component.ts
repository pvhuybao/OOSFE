import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../services/product.service';
import { ProductTail } from '../../admin/models/ProductTail';
import { takeLast } from 'rxjs/operators';
import { BannerModel } from '../models/banner';
import { CartService } from '../services/cart.service';
import { ProductCartModel } from '../models/productCart';
import { ToasterService } from 'angular2-toaster';
import { ProductModel } from '../models/product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // private toasterService: ToasterService;
  idProduct: string;
  product = new ProductModel();
  colorSelected: string;
  sizeSelected: string;
  listSize = [];
  listColor =[];
  price: number;
  image : string;
  listImages =[];
  available : string;
  flagCartButton : boolean = true;
  quantity : number = 1;
  quantityAvailble : number = 0;
  productCart : ProductCartModel;

  public link: any;

  productIsExist: boolean=true;
  oldPrice : number;
  DiscountExisted : boolean = true;
  constructor(private productService : ProductService,
              private activatedRoute: ActivatedRoute, 
              private cartService: CartService,
              private router: Router,
              private toasterService: ToasterService) { }

  ngOnInit() {    
    let params: any = this.activatedRoute.snapshot.params;
    this.link = this.activatedRoute.snapshot.params.id;
    this.idProduct = this.GetIdProduct(params.id);
    this.productService.get(this.idProduct).subscribe(data =>{
      if(data.id == null){
        this.productIsExist = false;
        return;
      }
      this.product = data;
      this.colorSelected = this.product.productTails[0].color;
      this.sizeSelected = this.product.productTails[0].size;
      this.getSizeByColor(this.colorSelected);
      this.setPriceImageQuantity(this.colorSelected,this.sizeSelected);

      this.listColor = this.getColorOption(); 
      if(this.product.discount === 0)
        this.DiscountExisted = false;      
    });        
    this.addFacebookComment();
  }

  addFacebookComment(){  
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12";
  
      if (d.getElementById(id)){
        //if <script id="facebook-jssdk"> exists
        delete (<any>window).FB;
        fjs.parentNode.replaceChild(js, fjs);
      } else {
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'facebook-jssdk'));
  }

  GetIdProduct(id:string){
    return  id.slice(0,id.indexOf("_"));
 }
 onChange(){
   this.listSize = [];
   this.listImages =[];
  this.getSizeByColor(this.colorSelected);
  this.setPriceImageQuantity(this.colorSelected,this.sizeSelected);
 }
 onChangeColor(){
  this.setPriceImageQuantity(this.colorSelected,this.sizeSelected);
 }
 
 getSizeByColor(color: string){
 var tail : ProductTail[];
 tail = this.product.productTails;
 for(var i =0; i < tail.length; i++){
  if(tail[i].color === color){
    this.listSize.push(tail[i].size);
    this.listImages.push({
      image: tail[i].image,
      title: "",
      content: ""
    });
  } 
 }
 }
 setPriceImageQuantity(color : string, size : string){
   var price = 0;
   var tail : ProductTail[];
 tail = this.product.productTails;
 for(var i =0; i < tail.length; i++){
  if(tail[i].color === color && tail[i].size=== size){
    this.oldPrice= tail[i].price;
    this.price =parseFloat((this.oldPrice - this.oldPrice * this.product.discount * 0.01).toFixed(1));
    this.image = tail[i].image;
    this.quantityAvailble = tail[i].quantity;
    if( this.quantityAvailble > 0)
    {
      this.available="In Stock";
      this.flagCartButton = false;
    }
    else
    {
      this.available="Out of Stock";
      this.flagCartButton = true;
    }
      
  } 
 }
 return 0;
}
getColorOption(){
  var listColor = [];
  var tail : ProductTail[];
 tail = this.product.productTails;
  for(var i =0; i < tail.length; i++){
    listColor.push(tail[i].color);
  }
  let unique_array = listColor.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
});
return unique_array
}

AddToCart(){
  var product = {
    id : this.product.id,
    description : this.product.description,
    image : this.image,
    name: this.product.name,
    price: this.price,
    color:this.colorSelected,
    size:this.sizeSelected
  }
  this.cartService.set(product,this.quantity);
    //pop up toaster
  this.toasterService.pop('success', product.name, 'Added to cart success!');
}
setColor(color){
  this.colorSelected = color;
}
}
