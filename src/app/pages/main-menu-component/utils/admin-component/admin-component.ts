import { Component } from '@angular/core';
import { UserService } from '../../../../services/user-service';

@Component({
  selector: 'app-admin-component',
  imports: [],
  templateUrl: './admin-component.html',
  styleUrl: './admin-component.css'
})
export class AdminComponent {


  isEditMode = false;
  constructor(protected userService: UserService) { }

  getUserInput(): number {
    const input = document.getElementById('pointsInput') as HTMLInputElement;
    if(input && input.value) {
        let retVal = parseInt(input.value);
        if(isNaN(retVal)) return 0;
        return retVal;
    }
    console.error("User input element not found or empty.");
    return 0;
  }
}
