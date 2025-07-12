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
    return false;
  }

  getUsers() {
    return this.users;
  }
}
