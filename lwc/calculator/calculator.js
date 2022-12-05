import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    firstNumber;
    secondNumber;
    sum;
    product;

    fnumberHandler(event){
       this. firstNumber = event.target.value;
    }

    snumberHandler(event){
        this.secondNumber = event.target.value;
     }

     sumHandler(){
        const num1 = parseInt(this. firstNumber);
        const num2 = parseInt(this. secondNumber);
        this.sum = num1 + num2;

     }

     productHandler(){
        const num1 = parseInt(this. firstNumber);
        const num2 = parseInt(this. secondNumber);
        this.product = num1 * num2;
     }
}