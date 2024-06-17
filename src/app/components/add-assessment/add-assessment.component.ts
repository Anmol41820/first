import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssessmentService } from '../../services/assessment.service';
import { Question } from '../../models/question';
import { Assessment } from '../../models/assessment';

@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.component.html',
  styleUrl: './add-assessment.component.scss'
})
export class AddAssessmentComponent {
  myForm: FormGroup;
  submitted = false;
  // option= []

  constructor(private fb: FormBuilder, private assessmentService: AssessmentService) {
    this.myForm = this.fb.group({
      'assessmentNo': ['', Validators.required],
      'assessmentDate': ['', Validators.required],
      'assessmentTime': ['', Validators.required],
      'facultyId': ['', Validators.required],

      'questionText': ['', Validators.required],
      'questionType': ['', Validators.required],
      'options': this.fb.array([])
    });
  }

  get f() { return this.myForm.controls; }


  ngOnInit() {
    this.addOptions();
  }

  get options(): FormArray {
    return this.myForm.get('options') as FormArray;
  }

  addOptions() {
    for (let i = 0; i < 4; i++) {
      this.options.push(this.fb.control(''));
    }
  }

  onQuestionTypeChange() {
    this.options.clear();
    this.addOptions();
  }

  


  onSubmit(value: any): void {
    this.submitted = true;

    var tempQuestion = new Question(1,value['questionText'],value['option'],'',value['questionType'])

    var tempQuestionArr = [tempQuestion];

    var tempAssessment = new Assessment(1,1,value['assessmentDate'],value['assessmentTime'],tempQuestionArr,value['facultyId'])

    // var tempAddress = new Address(value['houseNo'],value['street'],value['city'] ,value['pinCode'])
    // var tempAssessment = new User(1,value['firstName'], value['lastName'], tempAddress);

    if(this.myForm.valid){
      this.assessmentService.addAssessment(tempAssessment);
    }
  }
}
