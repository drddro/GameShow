import { Injectable } from '@angular/core';
import {Question} from "../models/Question";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questions: Question[] = [];
  constructor() { }

  addQuestions(questions: string[]){

  }

  clearQuestions() {

  }

  isReady(): boolean {
    if(this.questions.length < 30){
      return false;
    }
    return true;
  }
}
