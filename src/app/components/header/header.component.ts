import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  photoForm: FormGroup;
  photoURL: string | ArrayBuffer | null = null;
  loginEmail: string = "";
  loginPassword: string = "";
  loginCheckMe: string = "";
  validEmail: boolean = false;

  arrUser: User[] = [] ;

  constructor(private fb: FormBuilder,private userService: UserService) { 
    this.loginEmail = "";
    this.loginPassword = "";
    this.loginCheckMe = "";
    this.validEmail = false;

    // this.arrUser = this.userService.getUsers();
    this.userService.getUsers().subscribe(data=>{
      this.arrUser=data;
      console.log(this.arrUser)
    })


    this.photoForm = this.fb.group({
      photo: [null]
    });
  }

  ngAfterViewInit(): void {
    this.drawLogo();
  }

  drawLogo(): void {

    const canvas = document.getElementById('logo') as HTMLCanvasElement;
    if (canvas.getContext) {
      const context = canvas.getContext("2d")!;
      context.fillStyle = "#00246B";
      context.strokeStyle = "#00246B";

      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(0, 40);
      context.lineTo(30, 0);
      context.lineTo(60, 40);
      context.lineTo(285, 40);

      context.fill();
      context.closePath();

      context.font = "italic 35px 'Arial'";
      context.fillText("Assessment", 60, 36);

      context.save();
      context.translate(20, 20);
      context.fillRect(0, 0, 20, 20);

      context.fillStyle = "#CADCFC";
      context.strokeStyle = "#CADCFC";

      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(0, 20);
      context.lineTo(10, 0);
      context.lineTo(20, 20);
      context.lineTo(0, 20);

      context.fill();
      context.closePath();
      context.restore();
    }

  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.photoURL = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }


  
  onSubmitLogin(value: string): void {
    console.log('you submitted value: ',value);

    for(var i=0;i<this.arrUser.length;i++){
      if(this.arrUser[i].email == this.loginEmail){
        localStorage.setItem('role', this.arrUser[i].role);
        this.validEmail=false;
        location.reload();
        return ;
      }
    }
    this.validEmail=true;
  }
}
