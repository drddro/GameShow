import {Component, Input} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-user-score-card-component',
  imports: [],
  templateUrl: './user-score-card-component.html',
  styleUrl: './user-score-card-component.css'
})
export class UserScoreCardComponent {

  @Input() user!: User;
  @Input() points!: number;

  answeredCorrect(){
    this.user.points += this.points;
  };

  answersWrong(){
    this.user.points -= (this.points / 2);
  };

}
