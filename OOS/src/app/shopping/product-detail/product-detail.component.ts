import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  idProduct: string;
  product : any;
  constructor(private productService : ProductService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let params: any = this.activatedRoute.snapshot.params;
    this.idProduct = this.GetIdProduct(params.id);
    this.productService.get(this.idProduct).subscribe(data =>{
      this.product = data;
    });
  }
  GetIdProduct(id:string){
    return  id.slice(0,id.indexOf("_"));
 }

}
