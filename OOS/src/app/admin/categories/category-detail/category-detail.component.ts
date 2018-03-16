import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from '../../../shared/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  category = new CategoryModel;
  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(){
    var id = this.route.snapshot.paramMap.get("id");
    this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }

  deleteCategory(id: string){
    this.categoryService.delete(id).subscribe(data => { 
      this.router.navigateByUrl('');
    })
  }
}
