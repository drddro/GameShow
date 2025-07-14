import { Injectable } from '@angular/core';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private stringUsers: string[] = [];

  constructor() { }

  addUser(userString: string) {
    if(this.stringUsers.indexOf(userString.toLowerCase()) >= 0) return;
    this.stringUsers.push(userString.toLowerCase());
    this.users.push(
      {
        name: userString,
        points: 0
      });
  }

  clearUsers() {
    this.users = [];
    this.stringUsers = [];
  }

  isReady(): boolean {
    return this.users.length >= 2;
  }

  getUsers() {
    return this.users;
  }

  answeredQuestion(user: User, correct: boolean, points: number) {
    const index = this.users.indexOf(user);
    if(index < 0) return;
    if(correct) {
      this.users[index].points += points;
    } else {
      this.users[index].points -= (points / 2);
    }
  }

  addPoints(user: User, points: number) {
    const index = this.users.indexOf(user);
    if(index < 0) return;
    this.users[index].points += points;
  }
}
