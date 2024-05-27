import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  selectedDate: string = "";

  getMaxDate(): string {
    // Get current date
    const currentDate = new Date();
    // Convert to string in the format YYYY-MM-DD
    const year = currentDate.getFullYear() - 18;
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

}