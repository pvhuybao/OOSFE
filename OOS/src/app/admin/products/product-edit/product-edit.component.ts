import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services/Product.service';
import { ProductModel } from '../../../shopping/models/product';
import { ProductStatus } from '../../models/product';
import { CategoryService } from '../../services/category.service';
import { SpinnerService } from '../../../shared/services/spinner.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
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

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private spinnerService: SpinnerService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.productService.idProduct;
    this.get(this.id);

  }
  pushDataToInputs() {
    this.name = this.product.name;
    this.code = this.product.code;
    this.idCategory = this.product.idCategory;
    this.description = this.product.description;
    this.details = this.product.details;
    this.status = this.product.status;
    this.data = this.product.productTails;
    this.getStatus();
  }
  getStatus() {
    this.keys = Object.keys(this.status1).filter(Number);
  }
  get(id) {
    this.spinnerService.startLoadingSpinner();
    this.categoryService.get().subscribe(
      data => {
        this.categorys = data;
      }
    );
    this.productService.get(id).subscribe(data => {
      this.product = data;
      this.pushDataToInputs();
      this.spinnerService.turnOffSpinner();
     
    });
  }

  update() {
    var product = {
      id:this.product.id,
      name: this.name,
      description: this.description,
      details: this.details,
      idCategory: this.idCategory,
      categoryName:this.product.categoryName, //k lay
      code: this.code,
      status: this.status,
      productTails: this.data
    }
    this.productService.putProduct(product).subscribe(data => {
      this.router.navigateByUrl('/admin/manager/products');
      console.log(this);
    });
  }
}
