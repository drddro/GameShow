import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  constructor(private router: Router) { }


  ngOnInit(): void {
    this.router.navigate(['/setup']);
  }


}
