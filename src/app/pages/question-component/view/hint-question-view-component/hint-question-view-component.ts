import {Component, EventEmitter, Input} from '@angular/core';
import {Question} from '../../../../models/Question';
import {QuestionViewer} from '../question-viewer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hint-question-view-component',
  imports: [],
  templateUrl: './hint-question-view-component.html',
  styleUrl: './hint-question-view-component.css'
})
export class HintQuestionViewComponent implements QuestionViewer {

  @Input() question!: Question;
  indexer = 0;
  isShowingAnswer = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  goForward(): void {
    this.indexer++;
    if(this.indexer > this.question.question.length) {
      this.isShowingAnswer.emit(true);
    }else{
      this.isShowingAnswer.emit(false);
    }
  }

  goBack(): void {
      this.indexer--;
      if(this.indexer <= this.question.question.length) {
        this.isShowingAnswer.emit(false);
      }
      if(this.indexer < 0){
        this.router.navigate(['/board']);
      }
  }


  protected getDisplayText(): string {
    let output = '';
    if(this.indexer >= 1){
      output += this.question.question[0];
    }
    if(this.indexer >= 2){
      output += '-' + this.question.question[1];
    }
    if(this.indexer >= 3){
      output += '-' + this.question.question[2];
    }
    if(this.indexer >= 4){
      output += '--' + this.question.answer;
    }
    return output;
  }

}
