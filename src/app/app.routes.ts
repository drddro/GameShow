import { Routes } from '@angular/router';
import {MainMenuComponent} from './pages/main-menu-component/main-menu-component';
import {QuestionComponent} from './pages/question-component/question-component';
import {Setup} from './pages/setup/setup';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'board',
    pathMatch: 'full'
  },
  {
    path: 'setup',
    component: Setup,
  },
  {
    path: 'board',
    component: MainMenuComponent
  },
  {
    path: 'question/:id',
    component: QuestionComponent

  }
];
