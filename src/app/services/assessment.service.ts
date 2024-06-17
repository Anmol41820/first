import { Injectable } from '@angular/core';
import { Assessment } from '../models/assessment';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  // arrAssessment: Assessment[] = [];
  arrAssessment: Assessment[] = [];

  constructor() {
    // this.arrAssessment = [
    //   new Assessment(1,1,"1/1/2024","1:20" "C", "lorem23", "assets/photos/c.png", true),
    //   new Assessment(2, "C++", "bfbfbfb", "assets/photos/c++.png", true),
    //   new Assessment(3, "Java Script", "bfbfbfb", "assets/photos/js.png", true)
    // ]

    this,this.arrAssessment = [
      new Assessment(1,1,new Date(),'12:00',[new Question(1,'How are you?',['Good','Bad','None','All'],'Good','single correct')],200)
    ]

  }
  getAssessments() {
    return this.arrAssessment;
  }

  // getUserById(id:number){
  //   for(var i=0;i<this.arrUsers.length;i++){
  //     if(id==this.arrUsers[i].id){
  //       return this.arrUsers[i];
  //     }
  //   }
  //   return new User(0,'','',new Address(0,'','',0));
  // }

  addAssessment(a:Assessment) {
    var prevLen = this.arrAssessment.length;
    a.id = prevLen+1;
    this.arrAssessment.push(a);
    console.log(this.arrAssessment);
  }

  // getAssessments() {
  //   return this.arrAssessment;
  // }

  // getAssessmentById(id: number) {
  //   for (var i = 0; i < this.arrAssessment.length; i++) {
  //     if (id == this.arrAssessment[i].id) {
  //       return this.arrAssessment[i];
  //     }
  //   }
  //   return new Assessment(0, '', '', '', true);
  // }

}