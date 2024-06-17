import { Component } from '@angular/core';
import { Home } from '../../models/home';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    arrHome: Home[] = [];
    home:Home = new Home(0,"","","");

    constructor(private homeService: HomeService, private router: Router){
      this.arrHome = this.homeService.getHome();
    }

    displayDetails(id: number,name: string){
      // alert("done-> " + id + " : " +name);
      this.router.navigate(['/assessments']);
      
      // this.home = this.homeService.getHomeById(id);
      // console.log(this.home);
    }
}
