import { LightningElement } from 'lwc';

export default class AreaTriangle extends LightningElement {
    height;
    base;
    result;

    heightHandler(event){
        this.height = event.target.value;
    }

    baseHandler(event2){
        this.base = event2.target.value;
    }

    resultHandler(){
        const h = parseInt(this.height);
        const b = parseInt(this.base);
        this.result = h*b/2;

    }


}