import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  myForm: FormGroup;
  submitted = false;

  constructor(fb: FormBuilder, private categoryService: CategoryService){
    this.myForm = fb.group({
      'catDescription': ['',Validators.required]
    });
  }

  get f() { return this.myForm.controls;}


  onSubmit(value: any): void {
    this.submitted = true;

    var tempCategory = new Category(1,value['catDescription']);

    this.categoryService.addCategory(tempCategory);
  }
}
