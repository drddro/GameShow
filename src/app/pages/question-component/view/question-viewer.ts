import {Question} from '../../../models/Question';
import {EventEmitter} from '@angular/core';

export interface QuestionViewer {
  question: Question;
  indexer: number;
  isShowingAnswer: EventEmitter<boolean>;

  goForward(): void;
  goBack(): void;
}
