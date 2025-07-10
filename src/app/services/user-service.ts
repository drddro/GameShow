import { Injectable } from '@angular/core';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor() { }

  addUser(userString: string) {

  }

  clearUsers() {

  }

  isReady(): boolean {
    return false;
  }
}
