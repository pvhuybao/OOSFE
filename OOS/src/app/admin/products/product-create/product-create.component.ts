import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProductService } from '../../services/Product.service';
import { HttpClient } from '@angular/common/http';  

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit { 
  id:string;
 product:any;
 name : string;
 price : number;
 description : string;
 image : string;
 idCategory: string;
  constructor(private productService:ProductService,private router: Router) { 
  }
  ngOnInit() {
    this.id=this.productService.idProduct;
     this.productService.get(this.id).subscribe(data =>{
     this.product = data;
          });
  }
  create(){
    var product ={
      name : this.name,
      price : this.price,
      description : this.description,
      image :this.image,
      idCategory: this.idCategory
    }
     this.productService.postProduct(product).subscribe(data => {
       this.router.navigateByUrl('/admin/products');
     });
    }
}
