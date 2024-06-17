import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrl: './view-category.component.scss'
})
export class ViewCategoryComponent {
  arrCategory: Category[] = [];
  constructor(private categoryService: CategoryService){
    this.arrCategory = this.categoryService.getCategory();
  }
}
