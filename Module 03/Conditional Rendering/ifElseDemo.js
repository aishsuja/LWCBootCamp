import { LightningElement } from 'lwc';
import myResource from '@salesforce/resourceUrl/Resources';
//import tomImage from '@salesforce/resourceUrl/Tom.jpeg';
//import jerryImage from '@salesforce/resourceUrl/Jerry.jpeg';


export default class IfElseDemo extends LightningElement {

    //firstImage = tomImage;
    //secondImage = jerryImage;

    firstImage = myResource + '/Tom.jpeg';
    secondImage = myResource + '/Jerry.jpeg';


    switchImages() {
        this.showTemplateOne = !this.showTemplateOne;
    }
}