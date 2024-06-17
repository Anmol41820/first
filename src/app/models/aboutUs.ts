export class AboutUs {
    id: number;
    aboutUsName: string;
    aboutUsTitle: string;
    aboutUsText: string;
    img: string;


    constructor(id: number, aboutUsName: string, aboutUsTitle: string,aboutUsText: string, img: string){
        this.id = id;
        this.aboutUsName = aboutUsName;
        this.aboutUsTitle = aboutUsTitle;
        this.aboutUsText = aboutUsText;
        this.img = img;
    }
}