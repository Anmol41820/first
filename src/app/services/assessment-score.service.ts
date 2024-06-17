import { Injectable } from '@angular/core';
import { AssessmentScore } from '../models/assessmentScore';

@Injectable({
  providedIn: 'root'
})
export class AssessmentScoreService {

  arrAssessmentScore: AssessmentScore[] = [];

  constructor() {
    this,this.arrAssessmentScore = [
      new AssessmentScore(1,1,2,99)
    ]
  }

  getAssessmentScore(){
    return this.arrAssessmentScore;
  }

  getAssessmentScoreById(id:number){
    for(var i=0;i<this.arrAssessmentScore.length;i++){
      if(id==this.arrAssessmentScore[i].id){
        return this.arrAssessmentScore[i];
      }
    }
    return new AssessmentScore(0,0,0,0);
  }

  addAssessmentScore(as:AssessmentScore){
    var prevLen = this.arrAssessmentScore.length;
    as.id = prevLen+1;
    this.arrAssessmentScore.push(as);
    // console.log(this.arrCourse);
  }
}
