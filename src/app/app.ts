import {Component, OnInit} from '@angular/core';
import {Setup} from './pages/setup/setup';
import {Router, RouterOutlet} from '@angular/router';
import {ImageQuestion} from './pages/question/image-question/image-question';


@Component({
  selector: 'app-root',
  imports: [Setup, RouterOutlet, ImageQuestion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  flipped = false;

  ngOnInit(): void {

  }


}
