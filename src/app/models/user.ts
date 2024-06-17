import { Address } from "./address";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    role: string;
    address: Address;

    constructor(id: number,firstName: string, lastName: string,role:string, address: Address) {
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.role=role;
        this.address=address;
    }
}

