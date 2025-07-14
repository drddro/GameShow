import { Component } from '@angular/core';
import { UserService } from '../../../../services/user-service';

@Component({
  selector: 'app-admin-component',
  imports: [],
  templateUrl: './admin-component.html',
  styleUrl: './admin-component.css'
})
export class AdminComponent {


  isEditMode = true;
  constructor(protected userService: UserService) { }
  
  getUserInput(): number {
    const input = document.getElementById('pointsInput') as HTMLInputElement;
    if(input && input.value) {
      try{
        return parseInt(input.value);
      }
      catch(e){
        alert("Please enter a valid number.");
        return 0;
      }
    }
    console.error("User input element not found or empty.");
    return 0;
  }
}
