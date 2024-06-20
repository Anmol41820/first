import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Address } from '../../models/address';
import { User } from '../../models/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent {
  myForm: FormGroup;
  submitted = false;
  arrUser: User[] = [];
  idUpdated: string = '';
  user: User = new User('', "", "", "","",0,new Date, new Address(0, '', '', 0));


  constructor(fb: FormBuilder, private userService: UserService) {
    // this.arrUser = this.userService.getUsers();
    this.userService.getUsers().subscribe(data=>{
      this.arrUser=data;
      // console.log(this.arrUser);
    })
    this.myForm = fb.group({
      'id': [0, Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'role': ['', Validators.required],
      'phoneNo': ['', Validators.required],
      'dob': ['', Validators.required],
      'houseNo': ['', Validators.required],
      'street': ['', Validators.required],
      'city': ['', Validators.required],
      'pinCode': ['', Validators.required]
    });
  }

  get f() { return this.myForm.controls; }


  onSubmit(value: any): void {
    this.submitted = true;
    console.log('you submitted value: ', value);

    var tempAddress = new Address(value['houseNo'], value['street'], value['city'], value['pinCode'])
    var tempUser = new User(value['id'], value['firstName'], value['lastName'], value['role'],value['email'],value['phoneNo'],value['dob'], tempAddress);

    if (this.myForm.valid) {
      // this.userService.updateUser(tempUser);
      this.userService.updateUser(tempUser).subscribe(data =>{
        console.log("updated: "+ data);
        location.reload();
      })
    }
  }

  onChangeType(event: any): void {
    console.log(event.target.value);
    var idObtain = event.target.value;
    this.idUpdated = idObtain.split(':')[1].trim();
    console.log(this.idUpdated);

    for (var i = 0; i < this.arrUser.length; i++) {
      if (this.arrUser[i]['id'] == this.idUpdated) {
        this.user = this.arrUser[i];
      }
    }

    this.myForm.get('firstName')?.setValue(this.user.firstName.toString());
    this.myForm.get('lastName')?.setValue(this.user.lastName.toString());
    this.myForm.get('role')?.setValue(this.user.role.toString());
    this.myForm.get('email')?.setValue(this.user.email.toString());
    this.myForm.get('phoneNo')?.setValue(this.user.phoneNo.toString());
    this.myForm.get('dob')?.setValue(this.user.dob.toString());
    this.myForm.get('houseNo')?.setValue(this.user.address.houseNo.toString())
    this.myForm.get('street')?.setValue(this.user.address.street.toString());
    this.myForm.get('city')?.setValue(this.user.address.city.toString());
    this.myForm.get('pinCode')?.setValue(this.user.address.pinCode.toString());


  }
}
