import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Address } from '../models/address';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  arrUsers: User[] = [];
  baseUrl: string = "http://localhost:3000";
  httpHeader={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
    this,this.arrUsers = [
      // new User(1,'Anmol','Gupta','Admin','agupta20@iitk.ac.in',8982511209,new Date,new Address(1,"6th Cross Road","Bangalore",254852)),
      // new User(1,'Shiva','Gupta','User','anmolgupta41820@gmail.com',8982511209,new Date,new Address(1,"6th Cross Road","Bangalore",254852))
    ]
  }

  getUsers():Observable<User[]>{
    // return this.arrUsers
    return this.httpClient.get<User[]>(this.baseUrl + '/users')
    .pipe(catchError(this.httpError));
  }


  getUserById(id:string){
    for(var i=0;i<this.arrUsers.length;i++){
      if(id==this.arrUsers[i].id){
        return this.arrUsers[i];
      }
    }
    return new User('0','','','','',0,new Date,new Address(0,'','',0));
  }

  addUser(u:User):Observable<User>{

    // this.arrUsers.push(u);
    return this.httpClient.post<User>(this.baseUrl + '/users',JSON.stringify(u),this.httpHeader)
    .pipe(catchError(this.httpError));
  }

  updateUser(u: User):Observable<User>{
    // for(var i=0;i<this.arrUsers.length;i++){
    //   if(u.id==this.arrUsers[i].id){
    //     this.arrUsers[i]=u;
    //   }
    // }
    return this.httpClient.put<User>(this.baseUrl + '/users/' + u.id, JSON.stringify(u),this.httpHeader)
    .pipe(catchError(this.httpError));

  }

  httpError(error:HttpErrorResponse){
    let msg='';
    if(error.error instanceof ErrorEvent){
      msg=error.error.message;
    }
    else{
      msg=`Error Code:${error.status}\nMessafe:${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
