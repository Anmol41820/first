import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  arrCourse: Course[] = [];

  constructor() {
    this,this.arrCourse = [
      new Course(1,'C','Old language',5)
    ]
  }

  getCourse(){
    return this.arrCourse;
  }

  getCourseById(id:number){
    for(var i=0;i<this.arrCourse.length;i++){
      if(id==this.arrCourse[i].id){
        return this.arrCourse[i];
      }
    }
    return new Course(0,'','',0);
  }

  addCourse(c:Course){
    var prevLen = this.arrCourse.length;
    c.id = prevLen+1;
    this.arrCourse.push(c);
    // console.log(this.arrCourse);
  }

  
}
