import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { SpinnerService } from '../../shared/services/spinner.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,private spinnerService: SpinnerService) { }
  idCategory: string;
  products: any;
  ngOnInit() {
    this.spinnerService.startLoadingSpinner();
    this.activatedRoute.params
      .filter(params => params.id)
      .subscribe(params => {
        this.idCategory = this.GetIdCategory(params.id);
        this.productService.getByCategory(this.idCategory).subscribe(data => {
          this.products = data;
          this.spinnerService.turnOffSpinner();
        });
      });
  }

  GetIdCategory(id: string) {
    return id.slice(0, id.indexOf("_"));
  }

}
