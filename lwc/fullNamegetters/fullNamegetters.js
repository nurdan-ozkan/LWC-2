import { LightningElement } from 'lwc';

export default class FullName extends LightningElement {
    firstName;
    lastName;

    nameHandler(event){
        const field = event.target.name;
        if(field === 'firstname'){
            this.firstName = event.target.value;
        }
        else if(field === 'lastname'){
            this.lastName = event.target.value;
        }
    } 
}