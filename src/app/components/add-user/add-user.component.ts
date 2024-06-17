import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Address } from '../../models/address';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  myForm: FormGroup;
  submitted = false;

  constructor(fb: FormBuilder, private userService: UserService){
    this.myForm = fb.group({
      'firstName': ['',Validators.required],
      'lastName': ['',Validators.required],
      'email': ['',[Validators.required, Validators.email]],
      'role': ['',Validators.required],
      'phoneNo': ['',Validators.required],
      'dob': ['',Validators.required],
      'houseNo': ['',Validators.required],
      'street': ['',Validators.required],
      'city': ['',Validators.required],
      'pinCode': ['',Validators.required]
    });
  }

  get f() { return this.myForm.controls;}


  onSubmit(value: any): void {
    this.submitted = true;
    console.log('you submitted value: ',value);

    var tempAddress = new Address(value['houseNo'],value['street'],value['city'] ,value['pinCode'])
    var tempUser = new User(1,value['firstName'], value['lastName'],value['role'], tempAddress);

    if(this.myForm.valid){
      this.userService.addUser(tempUser);
    }
  }
}
