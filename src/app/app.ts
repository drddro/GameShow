import {Component, OnInit} from '@angular/core';
import {Setup} from './pages/setup/setup';
import {MainMenuComponent} from './pages/main-menu-component/main-menu-component';


@Component({
  selector: 'app-root',
  imports: [Setup, MainMenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  flipped = false;

  ngOnInit(): void {

  }


}
