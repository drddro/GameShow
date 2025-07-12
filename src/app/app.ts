import {Component, OnInit} from '@angular/core';
import {Setup} from './pages/setup/setup';


@Component({
  selector: 'app-root',
  imports: [Setup],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  flipped = false;

  ngOnInit(): void {

  }


}
