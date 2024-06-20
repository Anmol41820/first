import { Address } from "./address";

export class User {
    id: string;
    firstName: string;
    lastName: string;
    role: string;
    email: string;
    phoneNo: number;
    dob: Date;
    address: Address;

    constructor(id: string,firstName: string, lastName: string,role:string,email:string,phoneNo:number,dob:Date, address: Address) {
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.role=role;
        this.email=email;
        this.phoneNo=phoneNo;
        this.dob=dob;
        this.address=address;
    }
}

