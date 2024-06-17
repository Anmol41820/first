export class Home {
    id: number;
    homeName: string;
    homeContext: string;
    img: string;


    constructor(id: number, homeName: string, homeContext: string, img: string){
        this.id = id;
        this.homeName = homeName;
        this.homeContext = homeContext;
        this.img = img;
    }
}