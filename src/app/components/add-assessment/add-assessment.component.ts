import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AssessmentService } from '../../services/assessment.service';
import { Question } from '../../models/question';
import { Assessment } from '../../models/assessment';
import { validateHeaderName } from 'http';

@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.component.html',
  styleUrl: './add-assessment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddAssessmentComponent {
  // myForm: FormGroup;
  // submitted = false;

  // constructor(private fb: FormBuilder, private assessmentService: AssessmentService) {
  //   this.myForm = this.fb.group({
  //     'assessmentNo': ['', Validators.required],
  //     'assessmentDate': ['', Validators.required],
  //     'assessmentTime': ['', Validators.required],
  //     'facultyId': ['', Validators.required],

  //     'questionText': ['', Validators.required],
  //     'questionType': ['', Validators.required],
  //     'options': this.fb.array([])
  //   });
  // }

  // get f() { return this.myForm.controls; }

  // ngOnInit() {
  //   this.addOptions();
  // }

  // get options(): FormArray {
  //   return this.myForm.get('options') as FormArray;
  // }

  // addOptions() {
  //   for (let i = 0; i < 4; i++) {
  //     this.options.push(this.fb.control(''));
  //   }
  // }

  // onQuestionTypeChange() {
  //   this.options.clear();
  //   this.addOptions();
  // }

  // onSubmit(value: any): void {
  //   this.submitted = true;

  //   var tempQuestion = new Question(1,value['questionText'],value['option'],'',value['questionType'])

  //   var tempQuestionArr = [tempQuestion];

  //   var tempAssessment = new Assessment(1,1,value['assessmentDate'],value['assessmentTime'],tempQuestionArr,value['facultyId'])

  //   if(this.myForm.valid){
  //     this.assessmentService.addAssessment(tempAssessment);
  //   }
  // }




  isLinear = false;
  // question: Question = new Question(0,'',[],'','');
  assessment: Assessment = new Assessment('0', 0, '', '00:00', [], 0);
  arrAssessment: Assessment[] = []
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public itineryForm: FormGroup;
  count: any;
  itineries: Question[] = [];
  QuestionType = ['True/False', 'Multi-Correct'];
  selectedQuestionType: string[] = [];

  len = "";
  maxi = 0;




  constructor(private _formBuilder: FormBuilder, private assessmentService:AssessmentService) {

      // this.assessment = new Assessment('0', 0, '', '00:00', [], 0);
    // this.arrAssessment = this.assessmentService.getAssessments()

    this.firstFormGroup = this._formBuilder.group({
      assessmentNo: ['', Validators.required],
      assessmentDate: ['', Validators.required],
      assessmentTime: ['', Validators.required],
      facultyId: ['', Validators.required]

    });
    this.secondFormGroup = this._formBuilder.group({
      question: ['', Validators.required],
      questionType: ['', Validators.required],
      answer: ['', Validators.required],
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      option4: ['', Validators.required],
    });

    this.itineryForm = this._formBuilder.group({
      itineries: this._formBuilder.array([this.createItineryFormGroup()])
    })

    this.assessmentService.getAssessments().subscribe(data=>{
      for(var i=0;i<data.length;i++){
        if(this.maxi < parseInt(data[i].id)){
          this.maxi = parseInt(data[i].id);
        }
      }
      this.len = (this.maxi+1).toString();
    })
  }


  itineriesArr(): FormArray {
    return this.itineryForm.get("itineries") as FormArray
  }

  arrCheck: number[] = [];
  checkType(ind:number,a: any): void {

    if (a == 'True/False') {
      this.arrCheck[ind] = 1;
    }
    else if (a == 'Multi-Correct') {
      this.arrCheck[ind] = 2;
    }
  }

  saveFirstStepData(val: any): void {
    this.assessment.id = this.len;
    this.assessment.assessmentNo = val.value['assessmentNo'];
    this.assessment.assessmentDate = val.value.assessmentDate;
    this.assessment.assessmentTime = val.value.assessmentTime;
    this.assessment.facultyId = val.value.facultyId;
    console.log(this.assessment);
  }

  saveSecondStepData(formdata: any) {
    // alert("hiii");
    console.log(formdata);
    // if (this.itineryForm.valid) {
      // alert("no error");
      // const formdata = this.itineryForm.value;
      // console.log(formdata.itineries)
      //this.itineries=formdata.products
      formdata.itineries.forEach((fmData: any) => {
        let arr_option_temp: string[] = []
        let answer_temp: string = '';
        if(fmData.questionType == 'True/False'){
          answer_temp = fmData.answer;
        }
        else{
          arr_option_temp.push(fmData.option1);
          arr_option_temp.push(fmData.option2);
          arr_option_temp.push(fmData.option3);
          arr_option_temp.push(fmData.option4);

          answer_temp = fmData.answer;
        }

        this.itineries.push(new Question(1, fmData.question, arr_option_temp,answer_temp, fmData.questionType))
      })

      // Optional: Call a service to save to backend
      console.log('Itineries:', this.itineries);
      this.assessment.question = this.itineries;
      // this.arrAssessment.push(this.assessment);
      this.assessmentService.addAssessment(this.assessment).subscribe(data =>{
        console.log("added: "+ data);
        // location.reload();
      })
      // this.resetForm();
      // console.log(this.arrAssessment);
    // } else {
    //   console.log("no save second step");
      // Handle form validation errors
    // }
  }

  createItineryFormGroup(): any {
    this.count++;
    return new FormGroup({
      'question': new FormControl('', Validators.required),
      'questionType': new FormControl('', Validators.required),
      'answer': new FormControl('', Validators.required),
      'option1': new FormControl('', Validators.required),
      'option2': new FormControl('', Validators.required),
      'option3': new FormControl('', Validators.required),
      'option4': new FormControl('', Validators.required)
    })
  }

  removeOrClearItinery(i: number): void {
    const question_itineries = this.itineryForm.get('itineries') as FormArray
    if (question_itineries.length > 1) {
      question_itineries.removeAt(i)
    } else {
      question_itineries.reset()
    }
  }
  addItineryFormGroup() {
    const question_itineries = this.itineryForm.get('itineries') as FormArray
    question_itineries.push(this.createItineryFormGroup())
  }

  resetForm() {
    this.itineryForm.reset();
    this.itineries = [];
  }
}
