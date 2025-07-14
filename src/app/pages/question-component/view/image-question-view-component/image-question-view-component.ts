import {Component, EventEmitter, Input} from '@angular/core';
import {Question} from '../../../../models/Question';
import {QuestionViewer} from '../question-viewer';
import {Router} from '@angular/router';
import {ImageService} from '../../../../services/image-service';

@Component({
  selector: 'app-image-question-view-component',
  imports: [],
  templateUrl: './image-question-view-component.html',
  styleUrl: './image-question-view-component.css'
})
export class ImageQuestionViewComponent implements QuestionViewer {


  @Input() question!: Question;
  indexer = 0;
  isShowingAnswer = new EventEmitter<boolean>();

  constructor(private router: Router, protected imageService: ImageService){}

  goForward(): void {
      this.indexer++;
      if(this.indexer === 1){
        this.isShowingAnswer.emit(true);
      }
  }
  goBack(): void {
      this.indexer--;
      if(this.indexer === 0){
        this.isShowingAnswer.emit(false);
      }
      if(this.indexer < 0){
        this.router.navigate(['/board']);
      }
  }

  getPng() {
    if(this.question.is_picture && this.question.question) {
      const pngName = this.question.question as string;
      return this.imageService.getImgByName(pngName)?.url || '';
    }
    return "";
  }

}
