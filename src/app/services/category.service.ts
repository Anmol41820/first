import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  arrCategory: Category[] = [];

  constructor() {
    this,this.arrCategory = [
      new Category(1,'programming language')
    ]
  }

  getCategory(){
    return this.arrCategory;
  }

  getCategoryById(id:number){
    for(var i=0;i<this.arrCategory.length;i++){
      if(id==this.arrCategory[i].id){
        return this.arrCategory[i];
      }
    }
    return new Category(0,'');
  }

  addCategory(cat:Category){
    var prevLen = this.arrCategory.length;
    cat.id = prevLen+1;
    this.arrCategory.push(cat);
    // console.log(this.arrCategory);
  }
}
