import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Question} from '../../../../models/Question';
import {QuestionViewer} from '../question-viewer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question-view-component',
  imports: [],
  templateUrl: './question-view-component.html',
  styleUrl: './question-view-component.css'
})
export class QuestionViewComponent implements QuestionViewer{

  @Input() question!: Question;
  indexer = 0;
  @Output() isShowingAnswer = new EventEmitter<boolean>();


  constructor(private router: Router) { }

  goBack(): void {
    this.indexer--;
    this.isShowingAnswer.emit(false);
    if(this.indexer < 0){
      this.router.navigate(['/board']);
    }
  }


  goForward(): void {
    this.indexer++;
    if(this.indexer > 1){
      this.isShowingAnswer.emit(true);
    }
    if(this.indexer > 2){
      this.question.is_answered = true;
      this.router.navigate(['/board']);
    }
  }

  protected getDisplayText(): string {
    if(this.indexer == 1) {
      return this.question.question as unknown as string;
    }
    else if (this.indexer == 2) {
      return this.question.answer;
    }
    return "";
  }
}
