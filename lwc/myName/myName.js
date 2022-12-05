import { LightningElement } from 'lwc';

export default class MyName extends LightningElement {
    firstName;
    nameHandler(event){
        this.firstName = event.target.value;
    }
}