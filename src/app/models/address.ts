export class Address {
    houseNo: number;
    street: string;
    city: string;
    pinCode: number;

    constructor(houseNo: number, street: string, city: string, pinCode: number) {
        this.houseNo = houseNo;
        this.street = street;
        this.city = city;
        this.pinCode = pinCode;
    }
}