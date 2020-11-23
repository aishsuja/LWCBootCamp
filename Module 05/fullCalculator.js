import { LightningElement, track } from 'lwc';

export default class FullCalculator extends LightningElement {

    @track firstNumber=0;
    @track secondNumber=0;
    @track resultValue=0;
    handleChanges(event){
        if(event.target.name==='fnumber'){
            this.firstNumber= event.target.value;
        }
        if(event.target.name==='snumber'){
            this.secondNumber= event.target.value;
        }
    }
        addition() {
            this.resultValue = parseInt(this.firstNumber) + parseInt(this.secondNumber);
        }
        multiplication() {
            this.resultValue = this.firstNumber * this.secondNumber;
        }
        subtraction() {
            this.resultValue = this.firstNumber - this.secondNumber;
        }
        division() {
            this.resultValue = this.firstNumber / this.secondNumber;
        }
    }
