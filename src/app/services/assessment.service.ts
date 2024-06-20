import { Injectable } from '@angular/core';
import { Assessment } from '../models/assessment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  // arrAssessment: Assessment[] = [];
  arrAssessment: Assessment[] = [];
  baseUrl: string = "http://localhost:3000";
  httpHeader={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
    this,this.arrAssessment = [
      // new Assessment(1,1,new Date(),'12:00',[new Question(1,'How are you?',['Good','Bad','None','All'],'Good','single correct')],200)
    ]

  }

  getAssessments():Observable<Assessment[]>{
    // return this.arrUsers
    return this.httpClient.get<Assessment[]>(this.baseUrl + '/assessments')
    .pipe(catchError(this.httpError));
  }


  addAssessment(u:Assessment):Observable<Assessment>{

    return this.httpClient.post<Assessment>(this.baseUrl + '/assessments',JSON.stringify(u),this.httpHeader)
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