import {Component, Input} from '@angular/core';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-question-card-component',
  imports: [],
  templateUrl: './question-card-component.html',
  styleUrl: './question-card-component.css'
})
export class QuestionCardComponent{

  @Input() question!: Question;

  constructor() {
  }

  routeToQuestion() {

  }
}
