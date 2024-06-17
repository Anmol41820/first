export class Attendance {
    courseId: number;
    traineeId: number;

    constructor(courseId: number,traineeId: number) {
        this.courseId=courseId;
        this.traineeId=traineeId;
    }
}