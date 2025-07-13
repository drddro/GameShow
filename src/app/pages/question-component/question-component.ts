import {
  AfterViewInit,
  Component,
  ComponentRef,
  Input, OnDestroy, OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Question} from '../../models/Question';
import {QuestionViewComponent} from '../../utils/view/question-view-component/question-view-component';
import {HintQuestionViewComponent} from '../../utils/view/hint-question-view-component/hint-question-view-component';
import {ImageQuestionViewComponent} from '../../utils/view/image-question-view-component/image-question-view-component';
import {QuestionViewer} from '../../utils/view/question-viewer';
import {UserScoreCardComponent} from '../../utils/user-score-card-component/user-score-card-component';
import {UserService} from '../../services/user-service';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from '../../services/question-service';
import {NgClass, NgStyle} from '@angular/common';


type QuestionComponentType = typeof QuestionViewComponent | typeof HintQuestionViewComponent | typeof ImageQuestionViewComponent;


@Component({
  selector: 'app-question-component',
  imports: [
    UserScoreCardComponent,
    NgStyle,
    NgClass,
  ],
  templateUrl: './question-component.html',
  styleUrl: './question-component.css'
})

export class QuestionComponent implements OnInit, AfterViewInit, OnDestroy{
  @Input() question!: Question;
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  private currentComponent: ComponentRef<QuestionViewer> | null = null;
  protected showScoreSheat = false;

  constructor(protected route: ActivatedRoute, private router: Router, protected userService: UserService, protected questionService: QuestionService) { }

  ngAfterViewInit(): void {
    let questionType = 0;
    if(this.question.is_hint){
      questionType = 1;
    }else if(this.question.is_picture){
      questionType = 2;
    }

    this.loadComponent(questionType)
  }

  ngOnDestroy(): void {
    this.currentComponent?.instance.isShowingAnswer.unsubscribe();
  }

  ngOnInit(): void {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id')!);
    const tmp = this.questionService.getQuestionById(id);
    if(!tmp){
      alert("Error: Question not found");
      return;
    }
    this.question = tmp;
  }

  async loadComponent(questionType: number) {
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    const componentClasses: { [key: number]: QuestionComponentType } = {
      0: QuestionViewComponent,
      1: HintQuestionViewComponent,
      2: ImageQuestionViewComponent
    };

    const componentClass = componentClasses[questionType];
    this.currentComponent = this.container.createComponent(componentClass);

    // Set up any necessary inputs
    this.currentComponent.instance.question = this.question;

    this.currentComponent.instance.isShowingAnswer.subscribe(revealedAnswer =>{
      this.showScoreSheat = revealedAnswer;
    })
  }

  handleNavigation(forward: boolean) {
    if(forward) this.currentComponent?.instance.goForward();
    else this.currentComponent?.instance.goBack();
  }

  navigateBack() {
    this.question.is_answered = true;
    this.router.navigate(['/board']);
  }

  getRightShift() {
    return `right-1/${this.userService.getUsers().length}`
  }
}
