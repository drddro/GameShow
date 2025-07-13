import {Component, Input} from '@angular/core';
import { Question } from '../../models/Question';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question-card-component',
  imports: [],
  templateUrl: './question-card-component.html',
  styleUrl: './question-card-component.css'
})
export class QuestionCardComponent{

  @Input() question!: Question;

  constructor(private router: Router) {
  }

  routeToQuestion() {
    this.router.navigate(['/question', this.question.id]);
  }
}
