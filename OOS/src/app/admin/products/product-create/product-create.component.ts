import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/Product.service';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../services/category.service';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { ProductStatus } from '../../models/product';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categorys: any;
  product: any;

  id: string;
  name: string;
  code: string;
  idCategory: string = '';
  status: number;
  description: string;
  details: string;

  public status1 = ProductStatus;
  public item: number;
  public keys: any;

  settings = {
    columns: {
      image: {
        title: 'Image',
        filter: false
      },
      color: {
        title: 'Color',
        filter: false
      },
      size: {
        title: 'Size',
        filter: false
      },
      price: {
        title: 'Price',
        filter: false
      },
      quantity: {
        title: 'Quantity',
        filter: false
      },
    },
    actions: {
      position: 'right'
    },
    rowClassFunction: (row) => {
      if (row.data.type === '(-)') {
        return 'score negative';
      } else if (row.data.type === '(+)') {
        return 'score positive';
      }
      return '';
    }
  };
  data = [
  ];

  constructor(private productService: ProductService, private router: Router,
    private categoryService: CategoryService,
    private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.id = this.productService.idProduct;
    this.productService.get(this.id).subscribe(data => {
      this.product = data;
    });
    this.categoryService.get().subscribe(
      data => {
        this.categorys = data;
      }
    );

    this.getStatus();

  }

  getStatus() {
    this.keys = Object.keys(this.status1).filter(Number);
  }

  create() {
    var product = {
      name: this.name,
      description: this.description,
      details: this.details,
      idCategory: this.idCategory,
      code: this.code,
      status: this.status,
      productTails: this.data
    }
    this.productService.postProduct(product).subscribe(data => {
      this.spinnerService.turnOffSpinner();
      this.router.navigateByUrl('/admin/manager/products');
    });
  }





}
