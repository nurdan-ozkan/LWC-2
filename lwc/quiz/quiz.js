import { LightningElement } from 'lwc';

export default class Quiz extends LightningElement {
    correct=0;
    incorrect=0;
    totalquestion=2;
    progres;
    answer1;
    answer2;

    handlerChange(event){
        const fieldname = event.target.name;
        if(fieldname==="answer1"){
            this.answer1=event.target.value;
        }
        else if(fieldname==='answer2'){
            this.answer2=event.target.value;
        }
        this.totalCorrect();

    }

    totalCorrect(){
        var totalCorrect=0;
        var totalincorrect=0;

        if(this.answer1!=null){
            if(this.answer1==7){
                totalCorrect = totalCorrect +1;
            }else{
                totalincorrect = totalincorrect +1;
            }
        }

        if(this.answer2!=null){
            if(this.answer2==8){
                totalCorrect = totalCorrect +1;
            }else{
                totalincorrect = totalincorrect +1;
            }
        }
        this.correct = totalCorrect;
        this.incorrect = totalincorrect;
        this.progres = (totalCorrect + totalincorrect)/this.totalquestion *100;
    }



}