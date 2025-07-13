import {Component} from '@angular/core';
import {QuestionService} from '../../services/question-service';
import {UserService} from '../../services/user-service';
import {ImageService} from '../../services/image-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setup',
  imports: [],
  templateUrl: './setup.html',
  styleUrl: './setup.css'
})
export class Setup {
  constructor(private questionService: QuestionService,
              protected userService: UserService,
              private pngService: ImageService,
              private router: Router) { }

  getElement(ident: string){
    return document.getElementById(ident);
  }

  addQuestions(){
    const element = this.getElement('questions') as HTMLTextAreaElement;
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
    if(this.questionService.isReady() && this.userService.isReady()) {
      this.router.navigate(['/board']);
    }
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
