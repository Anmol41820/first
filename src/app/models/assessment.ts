import { Timestamp } from "rxjs";
import { Question } from "./question";

export class Assessment {
    id: number;
    assessmentNo: number;
    assessmentDate: Date;
    assessmentTime: string;
    question: Question[];
    facultyId: number;


    
    constructor(id:number,assessmentNo:number,assessmentDate:Date, assessmentTime: string,question: Question[],facultyId: number) {
        this.id=id;
        this.assessmentNo = assessmentNo;
        this.assessmentDate = assessmentDate;
        this.assessmentTime = assessmentTime;
        this.question = question;
        this.facultyId = facultyId;
    }

    // myFunc(){
    //     return this.active;
    //   }
}

