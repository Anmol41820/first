import { Injectable } from '@angular/core';
import { Home } from '../models/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  arrHome: Home[] = [];

  constructor() { 
    this.arrHome = [
      new Home(1,"C", "lorem23", "assets/photos/c.png"),
      new Home(2, "C++", "bfbfbfb", "assets/photos/c++.png"),
      new Home(3, "Java Script", "bfbfbfb", "assets/photos/js.png")
    ]
  }

  getHome() {
    return this.arrHome;
  }

  // getUserById(id:number){
  //   for(var i=0;i<this.arrUsers.length;i++){
  //     if(id==this.arrUsers[i].id){
  //       return this.arrUsers[i];
  //     }
  //   }
  //   return new User(0,'','',new Address(0,'','',0));
  // }
}
