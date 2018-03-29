import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services/Product.service';
import { ProductModel } from '../../models/product';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { ProductStatus } from '../../models/product';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id: string;
  product: any;
  public statusDefine = ProductStatus;
  public item: number;
  public keys: any;
  categorys: any;
  data: any;

  constructor(private productService: ProductService, private router: Router,
    private spinnerService: SpinnerService,
    private categoryService: CategoryService, ) { }

  ngOnInit() {
    this.spinnerService.startLoadingSpinner();
    this.id = this.productService.idProduct;
    this.productService.get(this.id).subscribe(data => {
      this.product = data;
      this.data = this.product.productTails;
      this.spinnerService.turnOffSpinner();
    });

    this.categoryService.get().subscribe(
      data => {
        this.categorys = data;
        this.spinnerService.turnOffSpinner();
      }
    );
    this.getStatus();

  }

  getStatus() {
    this.keys = Object.keys(this.statusDefine).filter(Number);
  }
  update() {
    this.spinnerService.startLoadingSpinner();
    this.productService.putProduct(this.product).subscribe(data => {
      this.spinnerService.turnOffSpinner();
      this.router.navigateByUrl('/admin/manager/products');
    });
  }

  settings = {
    columns: {
      image: {
        title: 'Image',
        filter: false,
      },
      color: {
        title: 'Color',
        filter: false,
      },
      size: {
        title: 'Size',
        filter: false,
      },
      price: {
        title: 'Price',
        filter: false,
        validation: 'number',
      },
      quantity: {
        title: 'Quantity',
        filter: false,
        validation: 'number',
      },
    },
  };


}