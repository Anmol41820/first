import { Component } from '@angular/core';
import { AboutUs } from '../../models/aboutUs';
import { AboutUsService } from '../../services/about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  arrAboutUs: AboutUs[] = [];
  aboutUs:AboutUs = new AboutUs(0,"","","","");

    constructor(private aboutUsService: AboutUsService){
      this.arrAboutUs = this.aboutUsService.getAboutUs();
    }
}
