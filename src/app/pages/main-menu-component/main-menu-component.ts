import { Component } from '@angular/core';
import {QuestionService} from '../../services/question-service';
import {UserService} from '../../services/user-service';
import {QuestionCardComponent} from '../../utils/question-card-component/question-card-component';

@Component({
  selector: 'app-main-menu-component',
  imports: [
    QuestionCardComponent
  ],
  templateUrl: './main-menu-component.html',
  styleUrl: './main-menu-component.css'
})
export class MainMenuComponent {

  constructor(protected questionService: QuestionService, protected userService: UserService) { }


}
