import { Injectable } from '@angular/core';
import { AboutUs } from '../models/aboutUs';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  arrAboutUs: AboutUs[] = [];

  constructor() { 
    this.arrAboutUs = [
      new AboutUs(1,"Founder & CEO", "Krupesh Bhat (Founder & CEO)","Krupesh Bhat is the founder and CEO of SignDesk. Tech entrepreneur with a passion for product and marketing, having 20+ years of extensive industry experience. Built & scaled HomeWarrantyReviews.com & LegalDesk.com; the most popular home warranty reviews website in the USA, and India’s #1 DIY legal documentation platform, respectively. MBA from the University of Maryland, Gold Medalist from Kuvempu university.", "assets/photos/founder.png"),

      new AboutUs(2, "Co-Founder", "Ashok Kadsur (Founder & CEO)","Ashok Kadsur is the co-founder of SignDesk. 20+ years experience in sales, business development & marketing. Previously associated with Vodafone. Planned & executed launch strategies in various markets, and was deeply involved with teams in healthcare, telecom & business consulting sectors with a focus on automation. Currently heading business development, strategic planning & operations at SignDesk.", "assets/photos/co-founder.png"),

      new AboutUs(3, "CTO", "Kiran HN (CTO)","Kiran HN is the co-founder of SignDesk. 22+ years experience in enterprise tech, business intelligence, digital transformation & product leadership. MBA from San Jose State University, certified in entrepreneurship & innovation from Stanford. Previously developed & executed omni-channel digital strategies,and delivered customer-centric products at Stanford Medicine, San Disk, Broadcom, NTT Data & Keane. Currently heads technology & innovation at Sign Desk as chief technology officer.", "assets/photos/cto.png"),

      new AboutUs(4, "Head of Product Engineering","Gururaj Shetty (Head of Product Engineering)","Gururaj Shetty is the Head of Product Engineering at SignDesk. 14+ years experience in cutting-edge software domains with specialization in SaaS & PaaS model architecture and implementation. Began in the software services sector, concentrating on European markets, and held successive tech leadership positions in Indian start-ups. Currently oversees the tech infrastructure and development team at SignDesk with the goal of building another domestic unicorn.","assets/photos/head-product.png")
    ]
  }

  getAboutUs() {
    return this.arrAboutUs;
  }
}
