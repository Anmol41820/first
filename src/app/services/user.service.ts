import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  arrUsers: User[] = [];

  constructor() {
    this,this.arrUsers = [
      new User(1,'Anmol','Gupta','Admin',new Address(1,"6th Cross Road","Bangalore",254852))
    ]
  }

  getUsers(){
    return this.arrUsers
  }

  getUserById(id:number){
    for(var i=0;i<this.arrUsers.length;i++){
      if(id==this.arrUsers[i].id){
        return this.arrUsers[i];
      }
    }
    return new User(0,'','','',new Address(0,'','',0));
  }

  addUser(u:User){
    var prevLen = this.arrUsers.length;
    u.id = prevLen+1;
    this.arrUsers.push(u);
    console.log(this.arrUsers);
  }
}
