import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProductService } from '../../services/Product.service';
import { HttpClient } from '@angular/common/http'; 
import {CategoryService } from '../../services/category.service';
import { ProductStatus } from '../../models/Product';


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
 image : string ;
 categorys : any;
 code :string;
 idCategory:string = '';
public status = ProductStatus;
//  public item: number;
 public keys: any;

  constructor(private productService:ProductService,private router: Router,
  private categoryService :CategoryService ) { 
  }

  ngOnInit() {
    this.id=this.productService.idProduct;
     this.productService.get(this.id).subscribe(data =>{
     this.product = data;
          });
    this.categoryService.get().subscribe(
      data =>{
        this.categorys = data;}
    );

    // this.getStatus();
          
  }

  getStatus() {
     this.keys = Object.keys(this.status).filter(Number);
   }
  create(){
    var product ={
      name : this.name,
      price : this.price,
      description : this.description,
      image :this.image,
     idCategory :this.idCategory,
      code: this.code
    }
     this.productService.postProduct(product).subscribe(data => {
       this.router.navigateByUrl('/admin/products');
     });
    }
}
