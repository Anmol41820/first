import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent {
  myForm: FormGroup;
  submitted = false;

  constructor(fb: FormBuilder, private courseService: CourseService){
    this.myForm = fb.group({
      'cName': ['',Validators.required],
      'cDescription': ['',Validators.required],
      'categoryId': ['',Validators.required]
    });
  }

  get f() { return this.myForm.controls;}


  onSubmit(value: any): void {
    this.submitted = true;

    var tempCourse = new Course(1,value['cName'],value['cDescription'],value['categoryId']);

    this.courseService.addCourse(tempCourse);
  }
}
