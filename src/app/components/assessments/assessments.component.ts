import { Component } from '@angular/core';
import { Assessment } from '../../models/assessment';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrl: './assessments.component.scss'
})
export class AssessmentsComponent {

  // a=20;
  // b=15;
  // constructor() { }
  // myFunc(){
  //   return true;
  // }




// ngSwitch
  // choice: number=0
  // constructor() { 
  //   this.choice=0;
  // }
  // nextChoice(): void{
  //   this.choice++;
  //   if(this.choice > 5){
  //     this.choice = 1;
  //   }
  //   console.log(this.choice);
  // }






// ngClass
  // isBordered: boolean=false;

  // classesObj = {
  //   bordered:false
  // };
  // classList: string[]=[];

  // constructor() {
  //   this.isBordered=true;
  //   this.classList = ['blue', 'round'];
  //   this.toggleBorder();
  // }

  // toggleBorder(): void {
  //   this.isBordered = !this.isBordered;

  //   this.classesObj = {
  //     bordered: this.isBordered
  //   };
  // }







  


  arrAssessment = [
    // new Assessment(1, "R", "lorem23", "assets/photos/r.png",true),
    // new Assessment(2, "C++", "bfbfbfb", "assets/photos/c++.png",true),
    // new Assessment(3, "Java Script", "bfbfbfb", "assets/photos/js.png",false),
    // new Assessment(4, "Python Script", "bfbfbfb", "assets/photos/pythonn.png",true),
    // new Assessment(4, "Python Script", "bfbfbfb", "assets/photos/pythonn.png",true),
    // new Assessment(4, "Python Script", "bfbfbfb", "assets/photos/pythonn.png",false),
  ]
}
