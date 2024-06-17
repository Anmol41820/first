import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssessmentScore } from '../../models/assessmentScore';
import { AssessmentScoreService } from '../../services/assessment-score.service';

@Component({
  selector: 'app-add-assessment-score',
  templateUrl: './add-assessment-score.component.html',
  styleUrl: './add-assessment-score.component.scss'
})
export class AddAssessmentScoreComponent {
  myForm: FormGroup;
  submitted = false;

  constructor(fb: FormBuilder, private assessmentScoreService: AssessmentScoreService){
    this.myForm = fb.group({
      'assessmentId': ['',Validators.required],
      'traineeId': ['',Validators.required],
      'score': ['',Validators.required]
    });
  }

  get f() { return this.myForm.controls;}


  onSubmit(value: any): void {
    this.submitted = true;

    var tempAssessmentScore = new AssessmentScore(1,value['assessmentId'],value['traineeId'],value['score']);

    this.assessmentScoreService.addAssessmentScore(tempAssessmentScore);
  }
}
