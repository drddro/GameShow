import {Component, EventEmitter, Input, Output} from '@angular/core';
import { User } from '../../../../models/User';
import { UserService } from '../../../../services/user-service';

@Component({
  selector: 'app-user-score-card-component',
  imports: [],
  templateUrl: './user-score-card-component.html',
  styleUrl: './user-score-card-component.css'
})
export class UserScoreCardComponent {

  @Input() user!: User;
  @Input() points!: number;
  @Output() isAnswered = new EventEmitter<boolean>();

  constructor(private userService: UserService) {}

  answeredCorrect(){
    this.userService.answeredQuestion(this.user, true, this.points);
    this.isAnswered.emit(true);
  };

  answeredWrong(){
    this.userService.answeredQuestion(this.user, false, this.points);
  };

}
