import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../../shared/category';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  category = new CategoryModel;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
     this.getCategory();
  }

  getCategory(): void{
    var id = this.route.snapshot.paramMap.get("id");
    this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }

  deleteCategory(id: string){
    this.categoryService.deleteCategory(id).subscribe( a => {
        this.router.navigateByUrl("");
    });
  }
}
