import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  constructor(private productService : ProductService,private activatedRoute: ActivatedRoute) { }
  idCategory : string;
   products : any;
  ngOnInit() {
    let params: any = this.activatedRoute.snapshot.params;
    this.idCategory= this.GetIdCategory(params.id);
    this.productService.getByCategory(this.idCategory).subscribe(data => {
      this.products = data;
    });
  }
  GetIdCategory(id:string){
     return  id.slice(0,id.indexOf("_"));
  }

}
