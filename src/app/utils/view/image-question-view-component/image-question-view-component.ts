import {Component, EventEmitter, Input} from '@angular/core';
import {Question} from '../../../models/Question';
import {QuestionViewer} from '../question-viewer';

@Component({
  selector: 'app-image-question-view-component',
  imports: [],
  templateUrl: './image-question-view-component.html',
  styleUrl: './image-question-view-component.css'
})
export class ImageQuestionViewComponent implements QuestionViewer {

  @Input() question!: Question;
  indexer= 0;
  isShowingAnswer = new EventEmitter<boolean>();

  goForward(): void {
      throw new Error('Method not implemented.');
  }
  goBack(): void {
      throw new Error('Method not implemented.');
  }


}
