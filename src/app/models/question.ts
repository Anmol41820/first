export class Question {
    id: number;
    qText: string;
    option: string[];
    answer: string;
    qType: string;

    constructor(id: number, qText: string, option: string[], answer: string, qType: string){
        this.id = id;
        this.qText = qText;
        this.option = option;
        this.answer = answer;
        this.qType = qType;
    }
}