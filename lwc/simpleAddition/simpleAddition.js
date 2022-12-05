import { LightningElement } from 'lwc';

export default class SimpleAddition extends LightningElement {
    firstNumber;
    secondNumber;
    result;

    resultHandler(){
        this.result = Number(this.firstNumber) + Number(this.secondNumber);
    }




    numberHandler(event){
        if(event.target.name=='fNum'){
            this.firstNumber = event.target.value;
        }

        else{
            this.secondNumber = event.target.value;
        }
    }




}