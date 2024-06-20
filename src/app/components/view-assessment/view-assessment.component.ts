import { Component } from '@angular/core';
import { Assessment } from '../../models/assessment';
import { AssessmentService } from '../../services/assessment.service';

@Component({
  selector: 'app-view-assessment',
  templateUrl: './view-assessment.component.html',
  styleUrl: './view-assessment.component.scss'
})
export class ViewAssessmentComponent {
  arrAssessment: Assessment[] = [];
  constructor(private assessmentService: AssessmentService){
    // this.arrAssessment = this.assessmentService.getAssessments();
    this.assessmentService.getAssessments().subscribe(data=>{
      this.arrAssessment=data;
      console.log(this.arrAssessment)
    })
  }
}
