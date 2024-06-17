import { Component } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrl: './view-course.component.scss'
})
export class ViewCourseComponent {
  arrCourse: Course[] = [];
  constructor(private courseService: CourseService){
    this.arrCourse = this.courseService.getCourse();
  }

  deleteCourse(id:number){
    this.arrCourse.splice(id-1, 1);
  }
}
