import {Component, EventEmitter, Output} from '@angular/core';
import {QuestionService} from '../../services/question-service';
import {UserService} from '../../services/user-service';
import {ImageService} from '../../services/image-service';

@Component({
  selector: 'app-setup',
  imports: [],
  templateUrl: './setup.html',
  styleUrl: './setup.css'
})
export class Setup {
  @Output() finished: EventEmitter<void> = new EventEmitter<void>();
  constructor(private questionService: QuestionService, private userService: UserService, private pngService: ImageService) { }

  getElement(ident: string){
    return document.getElementById(ident);
  }

  addQuestions(){
    const element = this.getElement('questions') as HTMLTextAreaElement;
    console.log(element);
    const questionsString = element?.value;
    if(!questionsString) {
      alert("Fehler beim einlesen der Fragen")
      return
    }
    this.questionService.addQuestions(questionsString.split("\n"));
    element.value = "";
  }

  deleteQuestions(){
    this.questionService.clearQuestions();
  }

  addUser(){
    const element = this.getElement('user') as HTMLInputElement;
    const userString = element?.value;
    if(!userString) {
      alert("Fehler beim einlesen des User")
      return
    }
    this.userService.addUser(userString);
    element.value = "";
  }

  deleteUsers(){
    this.userService.clearUsers();
  }

  startGame(){
    //if(this.questionService.isReady() && this.userService.isReady())
    this.finished.emit();
  }

  onFileSelected(event: Event) {
    if(!event.target) return;
    const files: FileList | null = (event.target as HTMLInputElement).files;
    if(!files) return;
    for (let i = 0; i < files.length; i++) {
      this.pngService.storeFile(files[i]);
    }
  }
}
