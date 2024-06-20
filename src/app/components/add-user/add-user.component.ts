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
  len = "";
  maxi = 0;

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

    this.userService.getUsers().subscribe(data=>{
      for(var i=0;i<data.length;i++){
        if(this.maxi < parseInt(data[i].id)){
          this.maxi = parseInt(data[i].id);
        }
      }
      this.len = (this.maxi+1).toString();
    })
  }

  get f() { return this.myForm.controls;}


  onSubmit(value: any): void {
    this.submitted = true;
    console.log('you submitted value: ',value);

  
    var tempAddress = new Address(value['houseNo'],value['street'],value['city'] ,value['pinCode'])
    var tempUser = new User(this.len,value['firstName'], value['lastName'],value['role'],value['email'],value['phoneNo'],value['dob'], tempAddress);

    if(this.myForm.valid){
      // this.userService.addUser(tempUser);
      this.userService.addUser(tempUser).subscribe(data =>{
        console.log("added: "+ data);
        location.reload();
      })
    }
    
  }
}
