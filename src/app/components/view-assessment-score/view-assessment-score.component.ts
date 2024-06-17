import { Component } from '@angular/core';
import { AssessmentScore } from '../../models/assessmentScore';
import { AssessmentScoreService } from '../../services/assessment-score.service';

@Component({
  selector: 'app-view-assessment-score',
  templateUrl: './view-assessment-score.component.html',
  styleUrl: './view-assessment-score.component.scss'
})
export class ViewAssessmentScoreComponent {
  arrAssessmentScore: AssessmentScore[] = [];
  constructor(private assessmentScoreService: AssessmentScoreService){
    this.arrAssessmentScore = this.assessmentScoreService.getAssessmentScore();
  }
}
