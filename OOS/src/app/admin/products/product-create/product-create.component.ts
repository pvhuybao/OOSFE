import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProductService } from '../../services/Product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  public name:string ='';
  public id : string = '';
  public isDisabled;
  constructor( private router: Router,private product : ProductService) { 
    this.isDisabled = false;
  }

  ngOnInit() {
  }

  create(){
    this.isDisabled = true;
    this.product.postProduct( this.name, this.id).subscribe(data => {
      this.router.navigateByUrl('');
    });
  }

}
