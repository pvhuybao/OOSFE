import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services/Product.service';
import { ProductModel } from '../../../shopping/models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id:string;
  product:any;
  constructor( private productService:ProductService,private router: Router) { }

  ngOnInit() {
    this.id=this.productService.idProduct;
    this.productService.get(this.id).subscribe(data =>{
    this.product = data;
         });
  }

  update()
  {
    this.productService.putProduct(this.product).subscribe(data => {
      this.router.navigateByUrl('/admin/manager/products');
  });
  }
}
