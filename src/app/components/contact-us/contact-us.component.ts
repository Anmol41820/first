import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  
  myForm: FormGroup;
  submitted = false;

  constructor(fb: FormBuilder){
    this.myForm = fb.group({
      'name': ['',Validators.required],
      'email': ['',[Validators.required, Validators.email]],
      'phoneNo': ['',Validators.required]
    });
  }

  get f() { return this.myForm.controls;}


  onSubmit(value: any): void {
    this.submitted = true;
    // console.log('you submitted value: ',value);
  }

}
